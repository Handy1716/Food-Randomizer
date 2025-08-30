

export function FoodList({foods}) {
  return (
    <div>
       {foods.map((food, index) => (
         <div key={index}>{food}</div>
       ))}
    </div>
  );
}