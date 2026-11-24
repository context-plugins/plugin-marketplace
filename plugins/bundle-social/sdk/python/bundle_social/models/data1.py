from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Data1(SdkBaseModel):
    id: str
    """Instagram Media ID"""

    media_type: str
    """Instagram media type"""

    like_count: Optional[float] = UNSET
    """Number of likes if available"""

    comments_count: Optional[float] = UNSET
    """Number of comments if available"""

    timestamp: Optional[str] = UNSET
    """Media publication timestamp"""

    caption: Optional[str] = UNSET
    """Media caption if available"""


class Data1Dict(TypedDict):
    id: str
    media_type: str
    like_count: NotRequired[float]
    comments_count: NotRequired[float]
    timestamp: NotRequired[str]
    caption: NotRequired[str]
