import { useDispatch } from "react-redux";
import { openModal, toggleModal } from "./slice/modalSlice";
import Modal from "./commonComponents/Modal";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
          RTK Modal Example 🚀
        </h1>
        <p className="text-gray-600 mb-4">
          Click the buttons below to open or toggle the modal.
        </p>
        <div className="flex flex-col space-y-3">
          <button
            onClick={() => dispatch(openModal())}
            className="px-5 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition"
          >
            Open Modal
          </button>
          <button
            onClick={() => dispatch(toggleModal())}
            className="px-5 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition"
          >
            Toggle Modal
          </button>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default App;
