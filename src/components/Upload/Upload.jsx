function Upload() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Upload Your File</h2>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                        type="text"
                        placeholder="Enter title"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                        placeholder="Enter description"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                    ></textarea>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload File</label>
                    <input
                        type="file"
                        accept=".pdf,.docx"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-sm text-gray-500 mt-2">Accepted formats: .pdf, .docx</p>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                    <input
                        type="text"
                        placeholder="Add tags (comma separated)"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Upload
                </button>
            </div>
        </div>
    );
}

export default Upload;