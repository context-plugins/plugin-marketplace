from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .buyer import Buyer, BuyerDict
from .enums.payment_method import PaymentMethodOrStr
from .enums.status1 import Status1OrStr
from .order_item_history_request import OrderItemHistoryRequest, OrderItemHistoryRequestDict
from .shipping_address import ShippingAddress, ShippingAddressDict


class CheckoutCreationOrderHistory(SdkBaseModel):
    purchased_at: RFC3339DateTime
    """Date and time the order was placed, in UTC, and displayed in ISO 8601 datetime format."""

    amount: str
    """Total payment amount, including tax, shipping, and excluding any discounts. Allows to send up to 2 decimals for
    AED and SAR, up to 3 decimals for KWD."""

    payment_method: Optional[PaymentMethodOrStr] = UNSET
    """Payment method used."""

    status: Status1OrStr
    """Status of the order."""

    buyer: Buyer
    """Customer information"""

    shipping_address: ShippingAddress
    items: Optional[list[OrderItemHistoryRequest]] = UNSET
    """Array of objects representing the order items in this payment. If you want to offer consumers a discount, use
    this object to create a “discount order item”, with the unit_price set to the negative value of the discount."""


class CheckoutCreationOrderHistoryDict(TypedDict):
    purchased_at: RFC3339DateTime
    amount: str
    payment_method: NotRequired[PaymentMethodOrStr]
    status: Status1OrStr
    buyer: BuyerDict
    shipping_address: ShippingAddressDict
    items: NotRequired[list[OrderItemHistoryRequestDict]]
