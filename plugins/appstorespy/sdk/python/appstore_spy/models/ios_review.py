from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IosReview(SdkBaseModel):
    id: Optional[str] = UNSET
    """Review ID"""

    app: Optional[str] = UNSET
    """App ID"""

    country: Optional[str] = UNSET
    """App storefront"""

    user_name: Optional[str] = UNSET
    """Name of the review author"""

    title: Optional[str] = UNSET
    """Review title"""

    created: Optional[str] = UNSET
    """Creation date"""

    stars: Optional[int] = UNSET
    """App rating"""

    comment: Optional[str] = UNSET
    """Review text"""


class IosReviewDict(TypedDict):
    id: NotRequired[str]
    app: NotRequired[str]
    country: NotRequired[str]
    user_name: NotRequired[str]
    title: NotRequired[str]
    created: NotRequired[str]
    stars: NotRequired[int]
    comment: NotRequired[str]
