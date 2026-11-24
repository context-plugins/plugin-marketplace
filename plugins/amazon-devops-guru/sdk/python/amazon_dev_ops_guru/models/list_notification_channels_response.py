from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .notification_channel import NotificationChannel, NotificationChannelDict


class ListNotificationChannelsResponse(SdkBaseModel):
    channels: Optional[list[NotificationChannel]] = Field(default=UNSET, alias="Channels")
    """An array that contains the requested notification channels."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """The pagination token to use to retrieve the next page of results for this operation. If there are no more pages,
    this value is null."""


class ListNotificationChannelsResponseDict(TypedDict):
    channels: NotRequired[list[NotificationChannelDict]]
    next_token: NotRequired[str]
