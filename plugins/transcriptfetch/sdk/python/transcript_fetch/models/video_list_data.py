from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .video import Video, VideoDict


class VideoListData(SdkBaseModel):
    kind: Literal["video_list"] = "video_list"
    source: Optional[str] = UNSET
    videos: Optional[list[Video]] = UNSET
    next_cursor: OptionalNullable[str] = UNSET
    """Pass back as ``cursor`` for the next page; null when exhausted."""


class VideoListDataDict(TypedDict):
    kind: Literal["video_list"]
    source: NotRequired[str]
    videos: NotRequired[list[VideoDict]]
    next_cursor: NotRequired[str | None]
