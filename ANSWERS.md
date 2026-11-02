# ANSWERS
 
## 1. What is the default value of `flexDirection` in React Native? How is it different from CSS on the web?
 
In React Native, the default value is “column,” while on the web it is “row.” In React Native, a View is already a flexible container by default, whereas on the web it is not.
 
## 2. What is the difference between `justifyContent` and `alignItems`?
 
`justifyContent` distributes the child elements along the axis defined by `flexDirection`. 
`alignItems` aligns the child elements along the axis perpendicular to the main axis. In a single-column layout, the opposite occurs.
 
## 3. What does `flex: 1` do inside a row? And on the outermost `View` of a screen?
 
Within a row, `flex: 1` causes the element to occupy the entire remaining width once its sibling elements have been sized; if multiple sibling elements have `flex`, they divide the space proportionally. In the outermost `View` of a screen, it causes the view to occupy the entire available height and width of the screen.
 
## 4. What is the difference between `resizeMode="cover"` and `resizeMode="contain"`?
 
`cover` scales the image while maintaining its aspect ratio until it fills the entire container, and `contain` scales the image while maintaining its aspect ratio until it fits completely (it may leave blank spaces).
 
## 5. Why do we use `StyleSheet.create` instead of plain objects inside the JSX?
 
`StyleSheet.create` keeps all styles in one place, resulting in clean code that is easy to read and maintain; it validates style properties during development and avoids having to create a new style object on every render.
 
## 6. Why does a shadow written with `shadowColor` not appear on Android?
 
The `shadow` properties only work on iOS, Android renders shadows using a different property, which is why `Platform.select` is used.