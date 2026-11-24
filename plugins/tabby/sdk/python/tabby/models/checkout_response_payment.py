from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .attachment_v1 import AttachmentV1, AttachmentV1Dict
from .enums.currency import CurrencyOrStr
from .enums.payment_status import PaymentStatusOrStr
from .meta import Meta, MetaDict
from .order_response import OrderResponse, OrderResponseDict


class CheckoutResponsePayment(SdkBaseModel):
    """Payment object associated with the current session."""

    id: Optional[UUID] = UNSET
    """Unique identifier for the payment (UUID), assigned by Tabby. Save it on your side!"""

    created_at: Optional[RFC3339DateTime] = UNSET
    """Date and time the payment was created, in UTC, and displayed in ISO 8601 datetime format."""

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
    order: OrderResponse | None
    meta: OptionalNullable[Meta] = UNSET
    """Merchant-defined data about the payment. This field is a key-value map. The example properties provided below."""

    attachment: OptionalNullable[AttachmentV1] = UNSET
    """Extra data (booking info, insurance, flight reservations, ...) as serialized JSON"""


class CheckoutResponsePaymentDict(TypedDict):
    id: NotRequired[UUID]
    created_at: NotRequired[RFC3339DateTime]
    status: NotRequired[PaymentStatusOrStr]
    is_test: NotRequired[bool]
    amount: str
    currency: CurrencyOrStr
    description: NotRequired[str | None]
    order: OrderResponseDict | None
    meta: NotRequired[MetaDict | None]
    attachment: NotRequired[AttachmentV1Dict | None]
