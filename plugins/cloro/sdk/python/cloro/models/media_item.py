from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MediaItem(SdkBaseModel):
    """Media content (video or image) found in response"""

    title: Optional[str] = UNSET
    """Media title"""

    url: Optional[str] = UNSET
    """Media URL"""

    thumbnail: Optional[str] = UNSET
    """Thumbnail URL"""

    medium: Optional[str] = UNSET
    """Media type as Perplexity labels it, for example ``video`` or ``image``"""

    source: Optional[str] = UNSET
    """Source platform"""

    image_width: Optional[float] = UNSET
    """Original image width"""

    image_height: Optional[float] = UNSET
    """Original image height"""

    thumbnail_width: Optional[float] = UNSET
    """Thumbnail width"""

    thumbnail_height: Optional[float] = UNSET
    """Thumbnail height"""


class MediaItemDict(TypedDict):
    title: NotRequired[str]
    url: NotRequired[str]
    thumbnail: NotRequired[str]
    medium: NotRequired[str]
    source: NotRequired[str]
    image_width: NotRequired[float]
    image_height: NotRequired[float]
    thumbnail_width: NotRequired[float]
    thumbnail_height: NotRequired[float]
