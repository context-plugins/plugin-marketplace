from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cart_instacart_connect_fulfillment_last_mile_delivery_api import (
    CartInstacartConnectFulfillmentLastMileDeliveryApi,
    CartInstacartConnectFulfillmentLastMileDeliveryApiDict,
)
from .delivery_address import DeliveryAddress, DeliveryAddressDict


class CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi(SdkBaseModel):
    hold_id: str
    """The identifier of the time slot hold from the reserve step."""

    cart: Optional[CartInstacartConnectFulfillmentLastMileDeliveryApi] = UNSET
    """The finalized cart for the order."""

    delivery_address: Optional[DeliveryAddress] = UNSET
    """The delivery address for the order."""

    delivery_instructions: Optional[str] = UNSET
    """Special instructions for the delivery driver."""


class CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiDict(TypedDict):
    hold_id: str
    cart: NotRequired[CartInstacartConnectFulfillmentLastMileDeliveryApiDict]
    delivery_address: NotRequired[DeliveryAddressDict]
    delivery_instructions: NotRequired[str]
