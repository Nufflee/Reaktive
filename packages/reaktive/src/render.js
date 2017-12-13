export function render(vnode, parent) {
  let newParent

  if (typeof vnode ==='string' || typeof vnode === 'number') {
    newParent = document.createTextNode(vnode)
    parent.append(newParent)
  } else {
    newParent = document.createElement(vnode.elementName)
    parent.append(newParent)

    console.log(vnode)
    for (let i = 0; i < vnode.children.length; i++) {
      render(vnode.children[i], newParent)
    }
  }
}
