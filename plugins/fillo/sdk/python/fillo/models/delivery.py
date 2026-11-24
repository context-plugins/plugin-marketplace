from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.event import EventOrStr
from .enums.kind import KindOrStr
from .enums.state import StateOrStr


class Delivery(SdkBaseModel):
    id: str
    destination_key: str = Field(alias="destinationKey")
    kind: KindOrStr
    destination_label: str = Field(alias="destinationLabel")
    """The same name as the matching destination's label — never a full webhook URL."""

    destination_detail: str | None = Field(alias="destinationDetail")
    event: EventOrStr
    state: StateOrStr
    attempts: int
    http_status: int | None = Field(alias="httpStatus")
    last_error: str | None = Field(alias="lastError")
    response_id: str | None = Field(alias="responseId")
    next_attempt_at: int | None = Field(alias="nextAttemptAt")
    queued_at: int = Field(alias="queuedAt")
    updated_at: int = Field(alias="updatedAt")


class DeliveryDict(TypedDict):
    id: str
    destination_key: str
    kind: KindOrStr
    destination_label: str
    destination_detail: str | None
    event: EventOrStr
    state: StateOrStr
    attempts: int
    http_status: int | None
    last_error: str | None
    response_id: str | None
    next_attempt_at: int | None
    queued_at: int
    updated_at: int
