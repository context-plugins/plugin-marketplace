from __future__ import annotations

from typing import Any

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.payment_processor import PaymentProcessor, PaymentProcessorOrStr


class TrackSaleRequest(SdkBaseModel):
    customer_external_id: str = Field(alias="customerExternalId")
    """The unique ID of the customer in your system. Will be used to identify and attribute all future events to this
    customer."""

    amount: int
    """The amount of the sale in the smallest unit of ``currency`` — cents for two-decimal currencies, the full integer
    for zero-decimal ones (e.g. ``1437`` JPY), thousandths for three-decimal ones (e.g. ``1437`` KWD fils)."""

    currency: str = "usd"
    """The currency of the sale, as an ISO 4217 code. Reporting is always in USD: non-USD sales are converted at the
    exchange rate of the day the sale is recorded, and the original amount and currency are kept on the event. The rate
    is not re-applied later, so reported totals do not move with the exchange rate."""

    event_name: str = Field(default="Purchase", alias="eventName")
    """The name of the sale event. Recommended format: ``Invoice paid`` or ``Subscription created``."""

    payment_processor: PaymentProcessorOrStr = Field(default=PaymentProcessor.CUSTOM, alias="paymentProcessor")
    """The payment processor via which the sale was made."""

    invoice_id: OptionalNullable[str] = Field(default=UNSET, alias="invoiceId")
    """The invoice ID of the sale. Can be used as a idempotency key – only one sale event can be recorded for a given
    invoice ID."""

    metadata: OptionalNullable[dict[str, Any]] = UNSET
    """Additional metadata to be stored with the sale event. Max 10,000 characters when stringified."""

    lead_event_name: OptionalNullable[str] = Field(default=UNSET, alias="leadEventName")
    """The name of the lead event that occurred before the sale (case-sensitive). This is used to associate the sale
    event with a particular lead event (instead of the latest lead event for a link-customer combination, which is the
    default behavior). For direct sale tracking, this field can also be used to specify the lead event name."""

    click_id: OptionalNullable[str] = Field(default=UNSET, alias="clickId")
    """[For direct sale tracking]: The unique ID of the click that the sale conversion event is attributed to. You can
    read this value from ``cq_id`` cookie."""

    customer_name: OptionalNullable[str] = Field(default=UNSET, alias="customerName")
    """[For direct sale tracking]: The name of the customer. If not passed, a random name will be generated (e.g. “Big
    Red Caribou”)."""

    customer_email: OptionalNullable[EmailStr] = Field(default=UNSET, alias="customerEmail")
    """[For direct sale tracking]: The email address of the customer."""

    customer_avatar: OptionalNullable[str] = Field(default=UNSET, alias="customerAvatar")
    """[For direct sale tracking]: The avatar URL of the customer."""

    event_id: Optional[str] = Field(default=UNSET, alias="eventId")
    """Deduplication key shared with your own browser pixel. When your site also fires a Meta or TikTok pixel for this
    conversion, pass the same event id here so the platform counts it once."""


class TrackSaleRequestDict(TypedDict):
    customer_external_id: str
    amount: int
    currency: NotRequired[str]
    event_name: NotRequired[str]
    payment_processor: NotRequired[PaymentProcessorOrStr]
    invoice_id: NotRequired[str | None]
    metadata: NotRequired[dict[str, Any] | None]
    lead_event_name: NotRequired[str | None]
    click_id: NotRequired[str | None]
    customer_name: NotRequired[str | None]
    customer_email: NotRequired[EmailStr | None]
    customer_avatar: NotRequired[str | None]
    event_id: NotRequired[str]
