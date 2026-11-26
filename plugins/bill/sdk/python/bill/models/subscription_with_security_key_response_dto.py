from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .status import Status, StatusDict
from .subscription_event_dto import SubscriptionEventDto, SubscriptionEventDtoDict


class SubscriptionWithSecurityKeyResponseDto(SdkBaseModel):
    """Subscription and security key information."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the subscription"""

    name: Optional[str] = UNSET
    """Subscription name"""

    organization_id: Optional[str] = Field(default=UNSET, alias="organizationId")
    """BILL-generated ID of the organization. BILL sends you event notifications only for the BILL organization used to
    set up a subscription."""

    status: Optional[Status] = UNSET
    events: Optional[list[SubscriptionEventDto]] = UNSET
    """Subscription events information. You can retrieve event ``type`` and ``version`` with ``GET
    /v3/events/catalog``."""

    notification_url: Optional[str] = Field(default=UNSET, alias="notificationUrl")
    """Event notification URL. The URL must be HTTPS. BILL uses this URL to send you event notifications."""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Subscription created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Subscription updated date and time"""

    security_key: Optional[str] = Field(default=UNSET, alias="securityKey")
    """BILL-generated security key.

    When you create a new subscription, a one-time ``securityKey`` is generated and all event notifications sent to your
    ``notificationUrl`` are signed with this key."""


class SubscriptionWithSecurityKeyResponseDtoDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    organization_id: NotRequired[str]
    status: NotRequired[StatusDict]
    events: NotRequired[list[SubscriptionEventDtoDict]]
    notification_url: NotRequired[str]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
    security_key: NotRequired[str]
