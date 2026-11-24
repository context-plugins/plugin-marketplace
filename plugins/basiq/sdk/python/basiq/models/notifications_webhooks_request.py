from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NotificationsWebhooksRequest(SdkBaseModel):
    name: Optional[str] = UNSET
    """name to describe the webhook."""

    description: Optional[str] = UNSET
    """detailed description of the webhook."""

    url: str
    """url to send webhooks to."""

    subscribed_events: Optional[list[str]] = Field(default=UNSET, alias="subscribedEvents")
    """one or more events that the webhook would send messages for."""


class NotificationsWebhooksRequestDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    url: str
    subscribed_events: NotRequired[list[str]]
