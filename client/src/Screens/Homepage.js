import React from 'react';
import pizzas from '../Data';
import Pizza from '../Component/Pizza';

export default function Homepage() {
  return (
    <div>
      <div className='row'>
        {pizzas.map(pizza => (
          <div className='col-md-4' key={pizza.id}>
            <div>
              <Pizza pizza={pizza} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}