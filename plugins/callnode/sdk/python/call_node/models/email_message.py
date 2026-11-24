from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .billing import Billing, BillingDict
from .enums.charge_status import ChargeStatusOrStr
from .enums.source import SourceOrStr
from .enums.status1 import Status1OrStr
from .event import Event, EventDict
from .tag_model import TagModel, TagModelDict


class EmailMessage(SdkBaseModel):
    id: Optional[str] = UNSET
    status: Optional[Status1OrStr] = UNSET
    """``queued`` only for the moment the message is being handed over (a list can catch it); the send answers ``sent``
    or ``failed``."""

    from_: Optional[str] = Field(default=UNSET, alias="from")
    to: Optional[list[str]] = UNSET
    cc: Optional[list[str]] = UNSET
    bcc: Optional[list[str]] = UNSET
    recipient_count: Optional[int] = Field(default=UNSET, alias="recipientCount")
    """What is billed - to + cc + bcc."""

    subject: Optional[str] = UNSET
    message_id: OptionalNullable[str] = Field(default=UNSET, alias="messageId")
    """The RFC 5322 Message-ID of the message as sent."""

    error: OptionalNullable[str] = UNSET
    """The receiving server's reason on a bounce or failure."""

    cost_usd: OptionalNullable[float] = Field(default=UNSET, alias="costUsd")
    charge_status: OptionalNullable[ChargeStatusOrStr] = Field(default=UNSET, alias="chargeStatus")
    status_webhook_url: OptionalNullable[str] = Field(default=UNSET, alias="statusWebhookUrl")
    tags: OptionalNullable[list[TagModel]] = UNSET
    metadata: OptionalNullable[Any] = UNSET
    test_mode: Optional[bool] = Field(default=UNSET, alias="testMode")
    source: Optional[SourceOrStr] = UNSET
    size_bytes: OptionalNullable[int] = Field(default=UNSET, alias="sizeBytes")
    """Body plus decoded attachments."""

    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    sent_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="sentAt")
    delivered_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="deliveredAt")
    last_event_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="lastEventAt")
    events: Optional[list[Event]] = UNSET
    """On the retrieve response only, oldest first."""

    estimated_cost: OptionalNullable[float] = Field(default=UNSET, alias="estimatedCost")
    """On the send response only - what this message cost at its place on the volume curve."""

    billing: OptionalNullable[Billing] = UNSET
    """On the send response only - how the message was priced."""

    replay: Optional[bool] = UNSET
    """On the send response only - true when an idempotency key replayed an earlier send."""


class EmailMessageDict(TypedDict):
    id: NotRequired[str]
    status: NotRequired[Status1OrStr]
    from_: NotRequired[str]
    to: NotRequired[list[str]]
    cc: NotRequired[list[str]]
    bcc: NotRequired[list[str]]
    recipient_count: NotRequired[int]
    subject: NotRequired[str]
    message_id: NotRequired[str | None]
    error: NotRequired[str | None]
    cost_usd: NotRequired[float | None]
    charge_status: NotRequired[ChargeStatusOrStr | None]
    status_webhook_url: NotRequired[str | None]
    tags: NotRequired[list[TagModelDict] | None]
    metadata: NotRequired[Any | None]
    test_mode: NotRequired[bool]
    source: NotRequired[SourceOrStr]
    size_bytes: NotRequired[int | None]
    created_at: NotRequired[RFC3339DateTime]
    sent_at: NotRequired[RFC3339DateTime | None]
    delivered_at: NotRequired[RFC3339DateTime | None]
    last_event_at: NotRequired[RFC3339DateTime | None]
    events: NotRequired[list[EventDict]]
    estimated_cost: NotRequired[float | None]
    billing: NotRequired[BillingDict | None]
    replay: NotRequired[bool]
