// import { useState } from "react";
// import PropTypes from "prop-types";
// import { } from "react-icons/fa";

const ToDo = ({ title }) => {
//   const [quantity, setQuantity] = useState(0);

//   const increaseNumber = () => {
//     setQuantity(quantity + 1);
//   };

//   const decreaseNumber = () => {
//     setQuantity(quantity - 1);
//   };

  return (
    <div className="card flex">
      <div>
        <h1>{title}</h1>
        <input class="addNew" type="text" id="addNew" name="addNew" placeholder="Add New" style="padding-left: 10px;" required></input>
      </div>
      <div className="taskList"></div>
      <div>
        <div>
           <button></button>
        <button></button>
        <h4 className="itemsLeft"> items left</h4> 
        </div>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
      </div>
    </div>
  );
};

// Product.propTypes = {
//   srcRight: PropTypes.string,
//   srcLeft: PropTypes.string,
//   title: PropTypes.string,
//   price: PropTypes.number,
//   //   description: PropTypes.string,
//   availability: PropTypes.number,
//   category: PropTypes.string,
// };

export default ToDo;
