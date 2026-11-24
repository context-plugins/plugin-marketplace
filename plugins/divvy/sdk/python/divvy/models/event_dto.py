from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class EventDto(SdkBaseModel):
    """Event information."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the event"""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Event type"""

    version: Optional[str] = UNSET
    """Event type version"""

    subscription_id: Optional[str] = Field(default=UNSET, alias="subscriptionId")
    """BILL-generated ID of the subscription"""

    payload: Optional[str] = UNSET
    """Event payload. The payload is JSON escaped and presented as a string."""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Event created date and time"""

    status_code: Optional[int] = Field(default=UNSET, alias="statusCode")
    """HTTP status code received from the notification URL"""


class EventDtoDict(TypedDict):
    id: NotRequired[str]
    type_: NotRequired[str]
    version: NotRequired[str]
    subscription_id: NotRequired[str]
    payload: NotRequired[str]
    created_time: NotRequired[RFC3339DateTime]
    status_code: NotRequired[int]
