import {
    CART_ADD_ITEM,
    // CART_EMPTY,
    // CART_REMOVE_ITEM,
    // CART_SAVE_PAYMENT_METHOD,
    // CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.meal === item.meal);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                        x.meal === existItem.meal ? item : x
                    ),
                };
            } else {
                return { ...state, cartItems: [...state.cartItems, item] };
            }

        default:
            return state;
    }
};