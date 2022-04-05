const initialState = { friends: [] };

export function manageFriends(state, action) {
  switch (action.type) {
    case "friends/add":
      return {
        friends: [
          ...state.friends,
          {
            name: action.payload.name,
            hometown: action.payload.hometown,
            id: action.payload.id,
          },
        ],
      };

    case "friends/remove":
      return {
        ...state,
        friends: state.friends.filter((user) => {
          if (user.id === action.payload.id) {
            return false;
          }
        }),
      };
    default:
      return state;
  }
}