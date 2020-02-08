# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
React JS is a javascript library that is used to build components and ui using JSX. React allows devs to build ui and components alot quicker by utilizing the javascript extention and the virtual dom.


1. What does it mean to think in react?
to think in react means to plan out how your app will come together. think about what you will need to achive as a minimal viable product and how to scale it.

1. Describe state.
state is the representation of change within a component. every component can change hence a chage of the state of the component.

1. Describe props.
props are properties that act more like variables. you can store information inside of props and pass it through your code like a variable instead of having to type out the exact value of that property.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?
side effects are a behavioral change within a funtion that affects anything outside of that function. you can sync these effects by using an effect hook by passing a setState or props in the dependacy array:

    useEffect( (), [ --- PLACE IN HERE --- ] );
