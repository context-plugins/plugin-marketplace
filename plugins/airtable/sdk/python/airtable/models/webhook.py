from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .webhook_specification import WebhookSpecification, WebhookSpecificationDict


class Webhook(SdkBaseModel):
    """A webhook subscription on an Airtable base."""

    id: str
    """The unique identifier of the webhook."""

    type_: str = Field(alias="type")
    """The type of the webhook (e.g., client)."""

    is_hook_enabled: Optional[bool] = Field(default=UNSET, alias="isHookEnabled")
    """Whether the webhook is currently active."""

    notification_url: Optional[str] = Field(default=UNSET, alias="notificationUrl")
    """The URL that receives webhook notifications."""

    cursor_for_next_payload: Optional[int] = Field(default=UNSET, alias="cursorForNextPayload")
    """The cursor position for the next unread payload."""

    are_notifications_enabled: Optional[bool] = Field(default=UNSET, alias="areNotificationsEnabled")
    """Whether notifications are currently being sent."""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """The time when the webhook was created."""

    expiration_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="expirationTime")
    """The time when the webhook will expire if not refreshed."""

    specification: Optional[WebhookSpecification] = UNSET
    """The specification defining what changes the webhook monitors."""


class WebhookDict(TypedDict):
    id: str
    type_: str
    is_hook_enabled: NotRequired[bool]
    notification_url: NotRequired[str]
    cursor_for_next_payload: NotRequired[int]
    are_notifications_enabled: NotRequired[bool]
    created_time: NotRequired[RFC3339DateTime]
    expiration_time: NotRequired[RFC3339DateTime]
    specification: NotRequired[WebhookSpecificationDict]
