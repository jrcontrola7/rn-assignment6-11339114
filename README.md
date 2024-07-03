React Native Shopping App
The React Native Shopping App is a user-friendly application designed to provide a seamless shopping experience. The Home screen showcases a variety of products, while the Cart screen allows users to easily view and manage their selected items. Navigation within the app is simplified with a bottom tab navigator, allowing for quick switching between the Home and Cart screens.
Design Choices
Navigation:


Bottom Tab Navigator: The app utilizes a bottom tab navigator to facilitate effortless navigation between the Home and Cart screens, ensuring a user-friendly experience.


Stack Navigator: Each tab (Home and Cart) is equipped with a stack navigator for smooth transitions within the respective screens. This design allows for easy scalability and the seamless addition of new screens within each tab.
UI Components


Home Screen: The Home screen features a curated list of products, each displayed with clear images, names, descriptions, and prices to enhance the browsing experience.


Cart Screen
The Cart Screen showcases the items that have been added to your cart. Each item in the cart is presented with its product image, name, description, price, and a remove button for easy deletion. To proceed with your purchase, simply click on the Checkout button.


Data Storage
Our app utilizes AsyncStorage to store cart data locally, ensuring that your cart contents are saved between app sessions.


Implementation Details
Navigation Setup:
The navigation system is set up using @react-navigation/native, @react-navigation/stack, and @react-navigation/bottom-tabs. The app includes a bottom tab navigator with two tabs: Home and Cart. Each tab utilizes a stack navigator to manage screens within the tab.


Data Storage with AsyncStorage:
Cart data is efficiently stored using AsyncStorage. Upon app launch, the cart data is retrieved from AsyncStorage and displayed. Users can easily add or remove items from the cart, with all changes automatically saved to AsyncStorage.


<img width="630" alt="Screenshot 2024-07-03 at 10 58 15 AM" src="https://github.com/jrcontrola7/rn-assignment6-11339114/assets/157807525/21b16360-34f3-4a15-adc6-42474681de3a">

<img width="575" alt="Screenshot 2024-07-03 at 11 20 06 AM" src="https://github.com/jrcontrola7/rn-assignment6-11339114/assets/157807525/f921398f-e7ec-4f1f-a127-821c912d7a95">
