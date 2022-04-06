import React from "react";
import Rodal from "rodal";

// include styles
import "rodal/lib/rodal.css";

const PokeModal = ({ open, val, openModalState }) => {
  return (
    <div>
      <Rodal
        visible={open}
        width={800}
        onClose={() => {
          openModalState(false);
        }}
      >
        <div>{val?.name}</div>
        <img src={val.sprites.other.dream_world.front_default} alt={val.name}></img>
        <h1>{val?.height}</h1>
      </Rodal>
    </div>
  );
};

export default PokeModal;
// class PokeModal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { visible: false };
//   }

//   show() {
//     this.setState({ visible: true });
//   }

//   hide() {
//     this.setState({ visible: false });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.show.bind(this)}>show</button>

//         <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
//           <div>Content</div>
//         </Rodal>
//       </div>
//     );
//   }
// }
// export default PokeModal
