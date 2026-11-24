from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.platform import PlatformOrStr
from .video2 import Video2, Video2Dict


class VideoListData2(SdkBaseModel):
    kind: Literal["video_list"] = "video_list"
    source: Optional[str] = UNSET
    """Which listing produced the page: channel, playlist or search."""

    platform: Optional[PlatformOrStr] = UNSET
    """Where the rows came from: the ``platform`` field on search, the platform detected from the URL on channel and
    playlist."""

    videos: Optional[list[Video2]] = UNSET
    next_cursor: OptionalNullable[str] = UNSET
    """Pass back as ``cursor`` for the next page; null when exhausted."""


class VideoListData2Dict(TypedDict):
    kind: Literal["video_list"]
    source: NotRequired[str]
    platform: NotRequired[PlatformOrStr]
    videos: NotRequired[list[Video2Dict]]
    next_cursor: NotRequired[str | None]
