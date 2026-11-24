from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DisconnectionEvent(SdkBaseModel):
    event_id: Optional[str] = Field(default=UNSET, alias="eventId")
    """A unique identifier that your application assigns to the event. You can use this to identify events in logs."""

    client_timestamp_millis: Optional[int] = Field(default=UNSET, alias="clientTimestampMillis")
    """A timestamp set by the client of the date and time that the event was sent to Amazon Lex V2."""


class DisconnectionEventDict(TypedDict):
    event_id: NotRequired[str]
    client_timestamp_millis: NotRequired[int]
