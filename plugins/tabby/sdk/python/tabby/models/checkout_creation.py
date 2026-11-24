from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .attachment_v1 import AttachmentV1, AttachmentV1Dict
from .buyer import Buyer, BuyerDict
from .buyer_history import BuyerHistory, BuyerHistoryDict
from .checkout_creation_order_history import CheckoutCreationOrderHistory, CheckoutCreationOrderHistoryDict
from .enums.currency import CurrencyOrStr
from .meta import Meta, MetaDict
from .order import Order, OrderDict
from .shipping_address import ShippingAddress, ShippingAddressDict


class CheckoutCreation(SdkBaseModel):
    """Payment object associated with the current session."""

    amount: str
    """Total payment amount, including tax, shipping and any discounts. Allows to send up to 2 decimals for AED and SAR,
    up to 3 decimals for KWD."""

    currency: CurrencyOrStr
    """ISO 4217 currency code for the payment amount. Currently there are 3 possible currency options - depending on the
    country where the store is located:
      - ``AED`` - United Arab Emirates Dirham
      - ``SAR`` - Saudi Riyal
      - ``KWD`` - Kuwaiti Dinar"""

    description: Optional[str] = UNSET
    buyer: Buyer
    """Customer information"""

    shipping_address: ShippingAddress
    order: Order
    buyer_history: BuyerHistory
    """Customer information. ``registered_since`` (as a date of the customer's registration in the App),
    ``loyalty_level`` (as a number of successful orders) and ``wishlist_count`` (paid amount by a customer previously,
    e.g. 500) must be sent for Monthly Billing. ``is_social_networks_connected`` is also required for Monthly
    Billing."""

    order_history: list[CheckoutCreationOrderHistory]
    """Array of objects, should contain information on 5-10 previously placed via any payment method orders in any
    status, current order excluded."""

    meta: OptionalNullable[Meta] = UNSET
    """Merchant-defined data about the payment. This field is a key-value map. The example properties provided below."""

    attachment: OptionalNullable[AttachmentV1] = UNSET
    """Extra data (booking info, insurance, flight reservations, ...) as serialized JSON"""


class CheckoutCreationDict(TypedDict):
    amount: str
    currency: CurrencyOrStr
    description: NotRequired[str]
    buyer: BuyerDict
    shipping_address: ShippingAddressDict
    order: OrderDict
    buyer_history: BuyerHistoryDict
    order_history: list[CheckoutCreationOrderHistoryDict]
    meta: NotRequired[MetaDict | None]
    attachment: NotRequired[AttachmentV1Dict | None]
