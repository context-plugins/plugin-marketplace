from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PlayReview(SdkBaseModel):
    id: str
    """Review ID"""

    lang: str
    """Review language"""

    author_id: str
    """ID of the review author"""

    author_name: str
    """Name of the review author"""

    author_image: str
    """Image URL of the review author"""

    version: Optional[str] = UNSET
    """App version"""

    created: str
    """Creation date"""

    stars: int
    """App rating"""

    likes: int
    """Review likes"""

    comment: str
    """Review text"""

    reply: Optional[str] = UNSET
    """Reply text"""

    replied: Optional[str] = UNSET
    """Reply date"""


class PlayReviewDict(TypedDict):
    id: str
    lang: str
    author_id: str
    author_name: str
    author_image: str
    version: NotRequired[str]
    created: str
    stars: int
    likes: int
    comment: str
    reply: NotRequired[str]
    replied: NotRequired[str]
