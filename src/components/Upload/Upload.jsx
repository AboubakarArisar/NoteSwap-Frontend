import React, { useState } from "react";

function Upload() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        tags: "",
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.title || !formData.description || !formData.file) {
            alert("Please fill in all required fields.");
            return;
        }

        console.log("Form Submitted:", formData);
        alert("File uploaded successfully!");

        setFormData({
            title: "",
            description: "",
            tags: "",
            file: null,
        });

        document.getElementById("fileInput").value = "";
    };

    return (
        <div className="flex mt:[2rem] items-center justify-center min-h-screen bg-gray-900 px-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md p-8 bg-gray-800 border border-gray-700 rounded-lg shadow-lg"
            >
                <h2 className="text-3xl font-bold mb-6 text-center text-white">
                    Upload Your File
                </h2>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                        Title<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter title"
                        className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                        Description<span className="text-red-500">*</span>
                    </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter description"
                        className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                        required
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                        Upload File<span className="text-red-500">*</span>
                    </label>
                    <input
                        id="fileInput"
                        type="file"
                        name="file"
                        accept=".pdf,.docx"
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white file:text-white file:bg-gray-700 file:border-0 file:mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <p className="text-sm text-gray-400 mt-1">
                        Accepted formats: .pdf, .docx
                    </p>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                        Tags
                    </label>
                    <input
                        type="text"
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                        placeholder="Add tags (comma separated)"
                        className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Upload
                </button>
            </form>
        </div>
    );
}

export default Upload;