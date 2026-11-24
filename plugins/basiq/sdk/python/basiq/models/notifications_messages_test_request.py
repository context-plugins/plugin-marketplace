from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NotificationsMessagesTestRequest(SdkBaseModel):
    event_type_id: str = Field(alias="eventTypeId")
    """The event type Id to be triggered. refer to /events/types/ for full list."""

    text: Optional[str] = Field(default=UNSET, alias="Text")
    """Text field to be supplied and replayed back."""


class NotificationsMessagesTestRequestDict(TypedDict):
    event_type_id: str
    text: NotRequired[str]
