import React from 'react';

export default function Form(props){
    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props


const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = evt => {
    /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
    const { name, value, type, checked} = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
  }

  return(
      <div className='order'>

<h2>Build Your Own Pizza</h2>
        <div className="order-img"></div>
        <div className="form-content">
            <h3>Build Your Own Pizza</h3>

            <form onSubmit={ onSubmit }>
                <div className="form-label">
                    <h4>Choice of Size</h4>
                    <span>Required</span>
                </div>

                <div className="form-options">
                    <select name="size" value={ values.size } onChange={ onChange }>
                        <option value="">Select</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </div>

                <div className="form-label">
                    <h4>Choice of Sauce</h4>
                    <span>Required</span>
                </div>

                <div className="form-options">
                    <input type="radio" name="sauce" value="Original-Red" checked={ values.sauce === 'Original-Red' } onChange={ onChange }/>
                    <label for="redSauce">Original Red</label><br/>

                    <input type="radio" name="sauce" value="Garlic-Ranch" checked={ values.sauce === 'Garlic-Ranch' } onChange={ onChange }/>
                    <label for="garlicRanch">Garlic Ranch</label><br/>

                    <input type="radio" name="sauce" value="BBQ-Sauce" checked={ values.sauce === 'BBQ-Sauce' } onChange={ onChange }/>
                    <label for="bbq">BBQ Sauce</label><br/>

                    
                    <input type="radio" name="sauce" value="Spinach-Alfredo" checked={ values.sauce === 'Spinach-Alfredo' } onChange={ onChange }/>
                    <label for="spinach">Spinach Alfredo</label><br/>
                </div>

                <div className="form-label">
                    <h4>Add Toppings</h4>
                    <span>Choose up to 10</span>
                </div>

                <div className="form-options">
                    <input type="checkbox" name="pepperoni" checked={ values.pepperoni } onChange={ onChange }/>
                    <label for="pepperoni">Pepperoni</label><br/>

                    <input type="checkbox" name="extra cheese" checked={ values.extraCheese } onChange={ onChange }/>
                    <label for="sausage">Extra Cheese</label><br/>

                    <input type="checkbox" name="canadian bacon" checked={ values.canadianBacon } onChange={ onChange }/>
                    <label for="canadian bacon">Canadian Bacon</label><br/>

                    <input type="checkbox" name="spicy italian sausage" checked={ values.spicyItalianSausage } onChange={ onChange }/>
                    <label for="spicy italian sausage">Spicy Italian Sausage</label><br/>

                    <input type="checkbox" name="grilled chicken" checked={ values.grilledChicken} onChange={ onChange }/>
                    <label for="grilled chicken">Grilled Chicken</label><br/>

                    <input type="checkbox" name="onions" checked={ values.Onions} onChange={ onChange }/>
                    <label for="onions">Onions</label><br/>

                    <input type="checkbox" name="green peppers" checked={ values.greenPeppers} onChange={ onChange }/>
                    <label for="green peppers">Green Peppers</label><br/>

                    <input type="checkbox" name="diced tomatoes" checked={ values.dicedTomatoes} onChange={ onChange }/>
                    <label for="diced tomatoes">Diced Tomatoes</label><br/>

                    <input type="checkbox" name="black olives" checked={ values.blackOlives} onChange={ onChange }/>
                    <label for="black olives">Black Olives</label><br/>

                    <input type="checkbox" name="roasted garlic" checked={ values.roastedGarlic} onChange={ onChange }/>
                    <label for="roasted garlic">Roasted Garlic</label><br/>

                    <input type="checkbox" name="artichoke hearts" checked={ values.artichokeHearts} onChange={ onChange }/>
                    <label for="artichoke hearts">Artichoke Hearts</label><br/>

                    <input type="checkbox" name="three cheese" checked={ values.threeCheese } onChange={ onChange }/>
                    <label for="three cheese">Three Cheese</label><br/>

                    <input type="checkbox" name="broccoli" checked={ values.broccoli} onChange={ onChange }/>
                    <label for="broccoli">Broccoli</label><br/>
                </div>
                <div className="form-sub">
                    <h4>Choice of Substitute</h4>
                    <span>Choose up to 1</span>

                    <div className="sub-options">
                    <input type="checkbox" name="gluten free" checked={ values.glutenFree } onChange={ onChange }/>
                    <label for="gluten free">Gluten Free Crust +$1.00</label><br/>


                </div>




                <div className="form-label">
                    <h4>Special Instructions</h4>
                </div>
                <div className="form-options">
                    <input type="text" placeholder="Anything else you'd like to add?" name="additional" onChange={ onChange } value={ values.additional }/>
                </div>

                <button disabled={ disabled } id="subBtn">Add to Order</button>
            </form>

            <div className='errors'>
                <div>{errors.size}</div>
                <div>{errors.sauce}</div>
            </div>
        </div>
    </div>
  );
}