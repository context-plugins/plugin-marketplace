from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .status2 import Status2, Status2Dict
from .subscription_event_dto import SubscriptionEventDto, SubscriptionEventDtoDict


class SubscriptionRequestDto(SdkBaseModel):
    """Create a subscription"""

    name: str
    """Subscription name"""

    status: Status2
    events: list[SubscriptionEventDto]
    """Subscription events information. You can retrieve event ``type`` and ``version`` with ``GET
    /v3/events/catalog``."""

    notification_url: str = Field(alias="notificationUrl")
    """Event notification URL. The URL must be HTTPS. BILL uses this URL to send you event notifications."""


class SubscriptionRequestDtoDict(TypedDict):
    name: str
    status: Status2Dict
    events: list[SubscriptionEventDtoDict]
    notification_url: str
