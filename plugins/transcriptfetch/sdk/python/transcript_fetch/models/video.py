from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Video(SdkBaseModel):
    video_id: Optional[str] = Field(default=UNSET, alias="videoId")
    title: Optional[str] = UNSET
    thumbnail_url: Optional[str] = Field(default=UNSET, alias="thumbnailUrl")
    duration: OptionalNullable[float] = UNSET
    channel: OptionalNullable[str] = UNSET


class VideoDict(TypedDict):
    video_id: NotRequired[str]
    title: NotRequired[str]
    thumbnail_url: NotRequired[str]
    duration: NotRequired[float | None]
    channel: NotRequired[str | None]
