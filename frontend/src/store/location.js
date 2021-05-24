import { csrfFetch } from './csrf';

const ADD_LOCATION = 'locations/addLocation';

const addLocation = (location) => (
    { type: ADD_LOCATION, location }
);

export const createLocation = location = async (dispatch) => {
    const { image, userId, name, price, address, city, state, country, description } = location;
    const formData = new FormData();
    formData.append("image", image)
    formData.append("userId", userId);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("country", country);
    formData.append("description", description);

    const res = await csrfFetch(`/api/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });

    const data = await res.json();
    dispatch(addLocation(data));
};

const locationsReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_LOCATION: {
            return state
        }
        default:
            return state
    }
}

export default locationsReducer;