import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddNewProduct() {
  const navigate = useNavigate();
  const [Message, setMessage] = useState("");
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState<any>({
    name: "",
    price: "",
    category: "",
    description: "",
    avatar: "",
    developerEmail: "",
  });

  const HandleSubmit = (event: any) => {
    event.preventDefault();

    if (formData) {
      fetch("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data.msg) {
            navigate("/");
          } else setMessage(data.msg);
        })
        .catch((data) => {
          setMessage("something goes wrong try again letter");
          console.log("data error", data);
        });
    }
  };

  useEffect(() => {
    fetch("https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const changeHandler = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevValues: any) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className="m-10 sm:mt-0">
        <div
          className="md:grid md:grid-cols-6 md:gap-2 "
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <div className="mt-5 col-span-12" style={{ width: "60%" }}>
            <form id="form-add" onSubmit={HandleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-12">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={changeHandler}
                        value={formData?.name}
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-12">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Price
                      </label>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        autoComplete="price"
                        className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={changeHandler}
                        value={formData?.price}
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-12">
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Category
                      </label>
                      <select
                        className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={changeHandler}
                        name="category"
                        id="category"
                        required
                      >
                        <option value=""> Select...</option>
                        {categories.map((category: any) => (
                          <option key={category.id} value={category.name}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-12">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <input
                        type="textarea"
                        name="description"
                        id="description"
                        autoComplete="description"
                        className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={changeHandler}
                        value={formData?.description}
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-12">
                      <label
                        htmlFor="avatar"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Avatar
                      </label>
                      <input
                        type="url"
                        name="avatar"
                        id="avatar"
                        autoComplete="avatar"
                        className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={changeHandler}
                        value={formData?.avatar}
                        required
                      />
                    </div>

                    <div
                      className="col-span-6 sm:col-span-12"
                      style={{ backgroundColor: "lightGrey" }}
                    >
                      {formData?.avatar ? (
                        <div
                          className="bg-secondary "
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            style={{ minHeight: "20vh", width: "100%" }}
                            src={formData?.avatar}
                            alt="Avatar"
                          />
                        </div>
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: "20vh",
                            fontSize: "30px",
                          }}
                        >
                          Avatar
                        </div>
                      )}
                    </div>

                    <div className="col-span-6 sm:col-span-12 ">
                      <label
                        htmlFor="developerEmail"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Developer Email
                      </label>
                      <input
                        type="email"
                        name="developerEmail"
                        id="developerEmail"
                        autoComplete="email"
                        className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={changeHandler}
                        value={formData?.developerEmail}
                        required
                      />
                    </div>
                  </div>
                  {Message && (
                    <p className="py-5 text-red text-center">{Message}</p>
                  )}
                  <div className="px-4 py-3 text-right sm:px-6 lg:px-40">
                    <button
                      type="submit"
                      className="mt-6 w-full border rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-grey hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Add Product
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddNewProduct;
