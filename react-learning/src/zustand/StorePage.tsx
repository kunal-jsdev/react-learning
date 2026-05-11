import { useAuthStore } from "./store/useAuthStore";
import { useCartStore } from "./store/useCartStore";

const StorePage = () => {
    const items = useCartStore((state) => state.items);
    const addItem = useCartStore((state) => state.addItem);
    const removeItem = useCartStore((state) => state.removeItem);
    const updateItem = useCartStore((state) => state.updateItem);
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const login = useAuthStore((state) => state.login);
    const logout = useAuthStore((state) => state.logout);
    const getUserName = useAuthStore((state) => state.getUserName);
  return (
    <div>
        {isAuthenticated ? (
            <div>
                <h2>Welcome, {getUserName()}!</h2>
                <div>StorePage</div>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price} - {item.quantity}
                        </li>
                    ))}
                </ul>
                <button onClick={() => addItem({id: 1, name: 'Apple', price: 0.5, quantity: 3})}>Add Apple</button>
                <button onClick={() => removeItem(1)}>Remove Apple</button>
                <button onClick={() => updateItem(1, { quantity: 5 })}>Update Apple Quantity</button>
                <button onClick={logout}>Log Out</button>
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center">
                <button onClick={() => login({ id: 1, name: 'John Doe' })}>
                    Log In
                </button>
            </div>
        )}
    </div>
  );
}
export default StorePage