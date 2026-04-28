import { createContext , useState} from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {

    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (product)=>{
        const exisit = favorites.find(
            (item)=>item.id == product.id
        );
        if(!exisit){
            setFavorites([...favorites,product]);
        }
    }

    const removeFromFavorites =(product)=>{
        const favoritesAfterRemove = favorites.filter(
            (item) => item.id !== product.id
        )
        setFavorites(favoritesAfterRemove);
    }

    return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites,removeFromFavorites  }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;