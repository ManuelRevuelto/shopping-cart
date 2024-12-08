export const initialState = JSON.parse(localStorage.getItem('cart')) || [];

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    REMOVE_ONE_FROM_CART: 'REMOVE_ONE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART',
};

export const updateLocalStorage = (state) => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action;
    switch (actionType) {
        case CART_ACTION_TYPES.ADD_TO_CART: {
            const productInCartIndex = state.findIndex(item => item.id === actionPayload.id);
            let newState = []
            if (productInCartIndex >= 0) {
                newState = structuredClone(state);
                newState[productInCartIndex].quantity += 1;
            } else {
                newState = [
                    ...state,
                    {
                        ...actionPayload,
                        quantity: 1,
                    }
                ]
            }
            updateLocalStorage(newState)
            return newState
        }

        case CART_ACTION_TYPES.REMOVE_FROM_CART: {
            const newState = state.filter(item => item.id !== actionPayload.id)
            updateLocalStorage(newState)
            return newState;
        }

        case CART_ACTION_TYPES.REMOVE_ONE_FROM_CART: {
            const existingItem = state.findIndex(item => item.id === actionPayload.id);
            let newState = structuredClone(state);
            if (newState[existingItem].quantity > 1) {
                newState[existingItem].quantity -= 1;
            } else {
                newState = state.filter(item => item.id !== actionPayload.id);
            }
            updateLocalStorage(newState)
            return newState;
        }

        case CART_ACTION_TYPES.CLEAR_CART: {
            updateLocalStorage([])
            return [];
        }

        default: {
            return state;
        }
    }
}