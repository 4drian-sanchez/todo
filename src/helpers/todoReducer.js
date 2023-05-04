export const todoReducer = (state = [], action) => {

    const { value } = action.payload;
    const existeValue = state.some((state) => state.value === value);

    switch (action.type) {
        case 'add todo':
            if (!existeValue) state = [...state, action.payload];

        case 'delete todo':
            return state.filter(todo => todo.id !== action.payload);

        case 'toggle todo':
            return state.map(todo => {
                if (todo.id === action.payload.id) {

                    return {
                        ...todo,
                        done: !todo.done
                    }

                }
                return todo
            })

        default:
            break;
    }

    return state;
}

