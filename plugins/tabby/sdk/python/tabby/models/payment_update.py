from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .attachment_v1 import AttachmentV1, AttachmentV1Dict
from .buyer_history_response import BuyerHistoryResponse, BuyerHistoryResponseDict
from .buyer_response import BuyerResponse, BuyerResponseDict
from .capture_response import CaptureResponse, CaptureResponseDict
from .enums.currency import CurrencyOrStr
from .enums.payment_status import PaymentStatusOrStr
from .meta import Meta, MetaDict
from .order_history_response import OrderHistoryResponse, OrderHistoryResponseDict
from .order_payment_update import OrderPaymentUpdate, OrderPaymentUpdateDict
from .refund_response import RefundResponse, RefundResponseDict
from .shipping_address_response import ShippingAddressResponse, ShippingAddressResponseDict


class PaymentUpdate(SdkBaseModel):
    """Payment object."""

    id: Optional[UUID] = UNSET
    """Unique identifier for the payment (UUID), assigned by Tabby. Save it on your side!"""

    created_at: Optional[RFC3339DateTime] = UNSET
    """Date and time the payment was created, in UTC, and displayed in ISO 8601 datetime format."""

    expires_at: Optional[RFC3339DateTime] = UNSET
    """Date and time the payment expires, in UTC, and displayed in ISO 8601 datetime format."""

    status: Optional[PaymentStatusOrStr] = UNSET
    """Status of the current payment:
    - ``CREATED`` means that the payment is created successfully, but not finished yet;
    - ``AUTHORIZED`` and ``CLOSED`` mark the successfully approved and captured payments accordingly;
    - ``REJECTED`` is returned when a customer is rejected during Tabby Checkout;
    - ``EXPIRED`` is used when a customer cancels a payment or when Tabby doesn't receive a successfully paid
        transaction after timeout."""

    is_test: Optional[bool] = UNSET
    """Indicates whether this is a test payment (created using the Test API keys or Production API Keys)."""

    amount: str
    """Total payment amount, including tax, shipping and any discounts. Allows to send up to 2 decimals for AED and SAR,
    up to 3 decimals for KWD."""

    currency: CurrencyOrStr
    """ISO 4217 currency code for the payment amount. Currently there are 3 possible currency options - depending on the
    country where the store is located:
      - ``AED`` - United Arab Emirates Dirham
      - ``SAR`` - Saudi Riyal
      - ``KWD`` - Kuwaiti Dinar"""

    description: OptionalNullable[str] = UNSET
    buyer: BuyerResponse | None
    """Customer information"""

    shipping_address: ShippingAddressResponse | None
    order: OrderPaymentUpdate | None
    captures: OptionalNullable[list[CaptureResponse]] = UNSET
    refunds: OptionalNullable[list[RefundResponse]] = UNSET
    buyer_history: BuyerHistoryResponse
    """Customer information. ``registered_since`` (as a date of the customer's registration in the App),
    ``loyalty_level`` (as a number of successful orders) and ``wishlist_count`` (paid amount by a customer previously,
    e.g. 500) must be sent for Monthly Billing. ``is_social_networks_connected`` is also required for Monthly
    Billing."""

    order_history: list[OrderHistoryResponse] | None
    """Array of objects, should contain information on 5-10 previously placed via any payment method orders in any
    status, current order excluded."""

    meta: OptionalNullable[Meta] = UNSET
    """Merchant-defined data about the payment. This field is a key-value map. The example properties provided below."""

    attachment: OptionalNullable[AttachmentV1] = UNSET
    """Extra data (booking info, insurance, flight reservations, ...) as serialized JSON"""


class PaymentUpdateDict(TypedDict):
    id: NotRequired[UUID]
    created_at: NotRequired[RFC3339DateTime]
    expires_at: NotRequired[RFC3339DateTime]
    status: NotRequired[PaymentStatusOrStr]
    is_test: NotRequired[bool]
    amount: str
    currency: CurrencyOrStr
    description: NotRequired[str | None]
    buyer: BuyerResponseDict | None
    shipping_address: ShippingAddressResponseDict | None
    order: OrderPaymentUpdateDict | None
    captures: NotRequired[list[CaptureResponseDict] | None]
    refunds: NotRequired[list[RefundResponseDict] | None]
    buyer_history: BuyerHistoryResponseDict
    order_history: list[OrderHistoryResponseDict] | None
    meta: NotRequired[MetaDict | None]
    attachment: NotRequired[AttachmentV1Dict | None]
