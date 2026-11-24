from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .media import Media, MediaDict


class DataBundleSocialMiscApi(SdkBaseModel):
    """User data if exists, null otherwise"""

    id: str
    """Instagram User ID"""

    username: str
    """Instagram username"""

    followers_count: float
    """Number of followers"""

    media_count: float
    """Number of media posts"""

    profile_picture_url: Optional[str] = UNSET
    """Profile picture URL if available"""

    biography: Optional[str] = UNSET
    """User biography if available"""

    name: Optional[str] = UNSET
    """Full name if available"""

    media: Optional[Media] = UNSET
    """Up to 12 recent public media items"""


class DataBundleSocialMiscApiDict(TypedDict):
    id: str
    username: str
    followers_count: float
    media_count: float
    profile_picture_url: NotRequired[str]
    biography: NotRequired[str]
    name: NotRequired[str]
    media: NotRequired[MediaDict]
