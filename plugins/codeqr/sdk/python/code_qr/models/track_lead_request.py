from __future__ import annotations

from typing import Any

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.mode import Mode, ModeOrStr


class TrackLeadRequest(SdkBaseModel):
    click_id: str = Field(alias="clickId")
    """The unique ID of the click that the lead conversion event is attributed to. You can read this value from
    ``cq_id`` cookie. If an empty string is provided, CodeQR will try to find an existing customer with the provided
    ``customerExternalId`` and use the ``clickId`` from the customer if found."""

    event_name: str = Field(alias="eventName")
    """The name of the lead event to track. Can also be used as a unique identifier to associate a given lead event for
    a customer for a subsequent sale event (via the ``leadEventName`` prop in ``/track/sale``)."""

    customer_external_id: str = Field(alias="customerExternalId")
    """The unique ID of the customer in your system. Will be used to identify and attribute all future events to this
    customer."""

    customer_name: OptionalNullable[str] = Field(default=UNSET, alias="customerName")
    """The name of the customer. If not passed, a random name will be generated (e.g. “Big Red Caribou”)."""

    customer_email: OptionalNullable[EmailStr] = Field(default=UNSET, alias="customerEmail")
    """The email address of the customer."""

    customer_avatar: OptionalNullable[str] = Field(default=UNSET, alias="customerAvatar")
    """The avatar URL of the customer."""

    mode: ModeOrStr = Mode.ASYNC
    """The mode to use for tracking the lead event. ``async`` will not block the request; ``wait`` will block the
    request until the lead event is fully recorded in CodeQR; ``deferred`` will defer the lead event creation to a
    subsequent request."""

    event_quantity: OptionalNullable[float] = Field(default=UNSET, alias="eventQuantity")
    """The numerical value associated with this lead event (e.g., number of provisioned seats in a free trial). If
    defined as N, the lead event will be tracked N times."""

    metadata: OptionalNullable[dict[str, Any]] = UNSET
    """Additional metadata to be stored with the lead event. Max 10,000 characters."""

    event_id: Optional[str] = Field(default=UNSET, alias="eventId")
    """Deduplication key shared with your own browser pixel. When your site also fires a Meta or TikTok pixel for this
    conversion, pass the same event id here so the platform counts it once."""


class TrackLeadRequestDict(TypedDict):
    click_id: str
    event_name: str
    customer_external_id: str
    customer_name: NotRequired[str | None]
    customer_email: NotRequired[EmailStr | None]
    customer_avatar: NotRequired[str | None]
    mode: NotRequired[ModeOrStr]
    event_quantity: NotRequired[float | None]
    metadata: NotRequired[dict[str, Any] | None]
    event_id: NotRequired[str]
