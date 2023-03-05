import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { patchAPI } from '../../utils';

export const SELLER_TESTID = 'seller_order_details';
export const PADNUMBER = 4;
const DATATESTID = `${SELLER_TESTID}__element-order-details-label`;

export default function SellerBar({ order }) {
  const [status, setStatus] = useState(order?.status);

  const handleStatusChange = async (value, setter) => {
    setter(value);
    if (status !== value) {
      await patchAPI(`/sales/status/${order?.id}`, console.log, { status: value });
    }
  };

  return (
    <div>
      <h3 data-testid={ `${DATATESTID}-order-id` }>
        {order?.id.toString().padStart(PADNUMBER, '0')}
      </h3>
      <p data-testid={ `${DATATESTID}-order-date` }>
        { moment(order?.saleDate).format('DD/MM/YYYY') }
      </p>
      <p data-testid={ `${DATATESTID}-delivery-status` }>
        {status.toUpperCase()}
      </p>
      <button
        type="button"
        value="Preparando"
        onClick={ ({ target: { value } }) => (handleStatusChange(value, setStatus)) }
        data-testid="seller_order_details__button-preparing-check"
      >
        Preparar Pedido

      </button>
      <button
        type="button"
        value="Em Trânsito"
        onClick={ ({ target: { value } }) => (handleStatusChange(value, setStatus)) }
        data-testid="seller_order_details__button-preparing-check"
      >
        Saiu Para Entrega
      </button>
    </div>
  );
}

SellerBar.propTypes = {
  order: PropTypes.shape().isRequired,
};