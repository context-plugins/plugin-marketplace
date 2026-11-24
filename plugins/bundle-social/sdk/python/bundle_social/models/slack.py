from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Slack(SdkBaseModel):
    channel_id: str = Field(alias="channelId")
    text: OptionalNullable[str] = UNSET
    upload_ids: OptionalNullable[list[str]] = Field(default=UNSET, alias="uploadIds")
    username: OptionalNullable[str] = UNSET
    """The username to display as the author of the message."""

    avatar_url: OptionalNullable[str] = Field(default=UNSET, alias="avatarUrl")
    """Avatar url to display as the author of the message."""


class SlackDict(TypedDict):
    channel_id: str
    text: NotRequired[str | None]
    upload_ids: NotRequired[list[str] | None]
    username: NotRequired[str | None]
    avatar_url: NotRequired[str | None]
