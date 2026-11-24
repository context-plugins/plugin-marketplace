from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .status2 import Status2, Status2Dict
from .subscription_event_dto import SubscriptionEventDto, SubscriptionEventDtoDict


class SubscriptionUpdateRequestDto(SdkBaseModel):
    """Update a subscription (name updated)"""

    name: Optional[str] = UNSET
    """Subscription name"""

    status: Optional[Status2] = UNSET
    events: Optional[list[SubscriptionEventDto]] = UNSET
    """Subscription events information. You can retrieve event ``type`` and ``version`` with ``GET
    /v3/events/catalog``."""

    notification_url: Optional[str] = Field(default=UNSET, alias="notificationUrl")
    """Event notification URL. The URL must be HTTPS. BILL uses this URL to send you event notifications."""


class SubscriptionUpdateRequestDtoDict(TypedDict):
    name: NotRequired[str]
    status: NotRequired[Status2Dict]
    events: NotRequired[list[SubscriptionEventDtoDict]]
    notification_url: NotRequired[str]
