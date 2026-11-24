from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.media_type import MediaTypeOrStr


class Media(SdkBaseModel):
    id: Optional[str] = UNSET
    caption: Optional[str] = UNSET
    media_type: Optional[MediaTypeOrStr] = UNSET
    media_url: Optional[str] = UNSET
    thumbnail_url: Optional[str] = UNSET
    """Thumbnail URL for videos."""

    permalink: Optional[str] = UNSET
    shortcode: Optional[str] = UNSET
    timestamp: Optional[RFC3339DateTime] = UNSET
    like_count: Optional[int] = UNSET
    comments_count: Optional[int] = UNSET
    is_comment_enabled: Optional[bool] = UNSET
    is_shared_to_feed: Optional[bool] = UNSET
    alt_text: Optional[str] = UNSET
    """Alt text for accessibility."""

    username: Optional[str] = UNSET


class MediaDict(TypedDict):
    id: NotRequired[str]
    caption: NotRequired[str]
    media_type: NotRequired[MediaTypeOrStr]
    media_url: NotRequired[str]
    thumbnail_url: NotRequired[str]
    permalink: NotRequired[str]
    shortcode: NotRequired[str]
    timestamp: NotRequired[RFC3339DateTime]
    like_count: NotRequired[int]
    comments_count: NotRequired[int]
    is_comment_enabled: NotRequired[bool]
    is_shared_to_feed: NotRequired[bool]
    alt_text: NotRequired[str]
    username: NotRequired[str]
