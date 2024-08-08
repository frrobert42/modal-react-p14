## Another modal component for React

https://github.com/frrobert42/modal-react-p14

### Installation

`npm install modal-react-p14`

### Usage

```jsx
<Modal 
    onClose={() => console.log('modal close')}
    // modal message can accept string or jsx
    modalMessage={"Custom modal message"}
/>
```

or

```jsx
<Modal 
    // onClose when modal is closed
    onClose={() => console.log('modal close')}
    // onClickButton when button is clicked
    onClickButton={() => console.log('button click')}
    // modal message can accept string or jsx
    modalMessage={"Message"}
    // modal background color optional props default is #000
    backgroundColor={"#000"}
    // message optional props default is #fff
    color={"#fff"}
    // button optional props if not provided button will not be displayed
    buttonMessage={""}
    buttonColor={"#fff"}
    buttonBackgroundColor={"#000"}
    // position optional props default is center
    positionX={"center"}
    positionY={"center"}
/>
```

### Build
`npm run build`


### A simple & lightweight method of displaying modal


## Custom Style

use classe : `.modal-react-p14` for styling the modal

