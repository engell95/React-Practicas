
function ListView({ items, filterItems }){
  
  return (
    <div>
      <input type="text" onChange={e => filterItems(e.target.value)} />
      <ul>
        {items.map((item, index) => (item && <p key={index}> {item}</p>) )}
      </ul>
    </div>
  )
}

export default ListView;