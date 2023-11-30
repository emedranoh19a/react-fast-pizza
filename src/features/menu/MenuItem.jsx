import { formatCurrency } from "../../utils/helpers";
// eslint-disable-next-line react/prop-types
function MenuItem({ pizza }) {
  // TODO:
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line react/prop-types
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  console.log(id);
  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        {/* 
        
        eslint-disable-next-line react/prop-types */}
        <p>{ingredients.join(", ")}</p>
        {/* TODO */}
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
