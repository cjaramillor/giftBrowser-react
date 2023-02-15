

export const CategoryItem = ({id,title,url}) => {
  
  
    return (
        <>
        <div className="card">
            <img className="card" src={ url } ></img>
            <p className="card">{ title }</p>
        </div>
            
        </>
        
    );
}
