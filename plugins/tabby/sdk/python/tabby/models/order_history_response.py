from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .buyer_response import BuyerResponse, BuyerResponseDict
from .enums.payment_method import PaymentMethodOrStr
from .enums.status_tabby_api_reference_payments_api import StatusTabbyApiReferencePaymentsApiOrStr
from .order_item_history_response import OrderItemHistoryResponse, OrderItemHistoryResponseDict
from .shipping_address_response import ShippingAddressResponse, ShippingAddressResponseDict


class OrderHistoryResponse(SdkBaseModel):
    purchased_at: RFC3339DateTime | None
    """Date and time the order was placed, in UTC, and displayed in ISO 8601 datetime format."""

    amount: str | None
    """Total payment amount, including tax, shipping, and excluding any discounts. Allows to send up to 2 decimals for
    AED and SAR, up to 3 decimals for KWD."""

    payment_method: OptionalNullable[PaymentMethodOrStr] = UNSET
    """Payment method used."""

    status: StatusTabbyApiReferencePaymentsApiOrStr | None
    """Status of the order."""

    buyer: BuyerResponse | None
    """Customer information"""

    shipping_address: ShippingAddressResponse | None
    items: OptionalNullable[list[OrderItemHistoryResponse]] = UNSET
    """Array of objects representing the order items in this payment. If you want to offer consumers a discount, use
    this object to create a “discount order item”, with the unit_price set to the negative value of the discount."""


class OrderHistoryResponseDict(TypedDict):
    purchased_at: RFC3339DateTime | None
    amount: str | None
    payment_method: NotRequired[PaymentMethodOrStr | None]
    status: StatusTabbyApiReferencePaymentsApiOrStr | None
    buyer: BuyerResponseDict | None
    shipping_address: ShippingAddressResponseDict | None
    items: NotRequired[list[OrderItemHistoryResponseDict] | None]
