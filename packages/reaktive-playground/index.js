import { render } from '../reaktive/index'

const MyComponent = (
  <div><p>test<p>test2</p></p></div>
)

let dropdown = () => {
  return (
    <Dropdown>
      A dropdown list

      <Menu>
        <MenuItem>Do Something</MenuItem>
        <MenuItem>Do Something Fun!</MenuItem>
        <MenuItem>Do Something Else</MenuItem>
      </Menu>
    </Dropdown>
  )
}

render('dsa', document.getElementById('root'))
render(1, document.getElementById('root'))
render(dropdown(), document.getElementById('root'))
//render(<MyComponent/>, document.getElementById('root'))