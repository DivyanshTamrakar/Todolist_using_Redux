const initialState = { list: [] };
const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETE_TODO":
      const newArray = state.list.filter((element) => element.id !== action.id);
      return {
        list: newArray,
      };

    case "CLEAR_TODO":
      return { ...state, list: [] };
    default:
      return state;
  }
};

export default TodoReducer;
