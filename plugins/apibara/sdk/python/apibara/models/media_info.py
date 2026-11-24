from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MediaInfo(SdkBaseModel):
    thumbs_count: Optional[int] = UNSET
    """Total source image count represented by the vehicle media set."""

    has_360: Optional[bool] = UNSET
    """True when IAAI Link360 or Copart copartMedia.views_360 source data is available."""

    photos: Optional[list[str]] = UNSET
    images_count: Optional[int] = UNSET
    """Total image count."""

    items_count: Optional[int] = UNSET
    """Number of media items returned in this response. Summary view may return fewer items than images_count."""

    has_video: Optional[bool] = UNSET
    items: Optional[list[Any]] = UNSET


class MediaInfoDict(TypedDict):
    thumbs_count: NotRequired[int]
    has_360: NotRequired[bool]
    photos: NotRequired[list[str]]
    images_count: NotRequired[int]
    items_count: NotRequired[int]
    has_video: NotRequired[bool]
    items: NotRequired[list[Any]]
