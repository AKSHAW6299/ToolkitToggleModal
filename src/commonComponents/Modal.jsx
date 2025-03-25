import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../slice/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  if (!isOpen) return null;

  const dummyData = [
    { id: 1, name: "John Doe", age: 28, role: "Developer", location: "NY" },
    { id: 2, name: "Jane Smith", age: 32, role: "Designer", location: "LA" },
    { id: 3, name: "Mike Johnson", age: 40, role: "Manager", location: "SF" },
    { id: 4, name: "Emily Davis", age: 26, role: "Engineer", location: "TX" },
    { id: 5, name: "Chris Brown", age: 35, role: "Analyst", location: "FL" },
    { id: 6, name: "Sarah Wilson", age: 29, role: "HR", location: "WA" },
    { id: 7, name: "David Lee", age: 41, role: "Sales", location: "AZ" },
    { id: 8, name: "Emma White", age: 30, role: "Marketing", location: "CO" },
    { id: 9, name: "James Bond", age: 38, role: "Agent", location: "London" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-3xl p-6 rounded-2xl shadow-lg relative">
        {/* Close Button (X) */}
        <button
          onClick={() => dispatch(closeModal())}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl"
        >
          &times;
        </button>

        {/* Modal Header */}
        <h2 className="text-2xl font-bold mb-4 text-center">User Information</h2>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">ID</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Age</th>
                <th className="p-2 border">Role</th>
                <th className="p-2 border">Location</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((user) => (
                <tr key={user.id} className="text-center hover:bg-gray-50">
                  <td className="p-2 border">{user.id}</td>
                  <td className="p-2 border">{user.name}</td>
                  <td className="p-2 border">{user.age}</td>
                  <td className="p-2 border">{user.role}</td>
                  <td className="p-2 border">{user.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-6 gap-3">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Save
          </button>
          <button
            onClick={() => dispatch(closeModal())}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
