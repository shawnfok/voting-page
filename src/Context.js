import React, {useState, useEffect} from "react"

const Context = React.createContext()

const ContextProvider = ({children}) => {
  const [allPhotos, setAllPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])
  // const [unpickedItems, setUnpickedItems] = useState([])
  
  const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setAllPhotos(data))
  }, [])
  //.resources.secure_url
  //https://api.cloudinary.com/v1_1/hjlogique/resources/image.json
  // const url = "https://381455919695343:OXOcdorxfZzQAIDsEJhfQh_0XRc@api.cloudinary.com/v1_1/hjlogique/resources/image.json"
  // useEffect(() => {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => setAllPhotos(data))
  // }, [])
  
  
  const addToCart = (newItem) => {
    setCartItems(prevItems => [...prevItems, newItem])
  }

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }
  
  const emptyCart = () => {
    setCartItems([])
  }
  
  return (
    <Context.Provider value={{
      allPhotos,  
      cartItems, 
      addToCart, 
      removeFromCart, 
      emptyCart
    }}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}