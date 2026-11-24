from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ResourceId(SdkBaseModel):
    kind: Optional[str] = UNSET
    video_id: Optional[str] = Field(default=UNSET, alias="videoId")
    playlist_id: Optional[str] = Field(default=UNSET, alias="playlistId")
    channel_id: Optional[str] = Field(default=UNSET, alias="channelId")


class ResourceIdDict(TypedDict):
    kind: NotRequired[str]
    video_id: NotRequired[str]
    playlist_id: NotRequired[str]
    channel_id: NotRequired[str]
