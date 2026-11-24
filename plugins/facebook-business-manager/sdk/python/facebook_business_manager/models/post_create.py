from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PostCreate(SdkBaseModel):
    message: Optional[str] = UNSET
    """The text content for the post"""

    link: Optional[str] = UNSET
    """URL to share in the post"""

    published: bool = True
    """Whether to publish the post immediately"""

    scheduled_publish_time: Optional[int] = UNSET
    """Unix timestamp for when to publish the post. Must be between 10 minutes and 6 months from now."""

    targeting: Optional[Any] = UNSET
    """Targeting specification for the post audience"""


class PostCreateDict(TypedDict):
    message: NotRequired[str]
    link: NotRequired[str]
    published: NotRequired[bool]
    scheduled_publish_time: NotRequired[int]
    targeting: NotRequired[Any]
