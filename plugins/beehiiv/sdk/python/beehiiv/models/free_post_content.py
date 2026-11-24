from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FreePostContent(SdkBaseModel):
    """The requested free post HTML. This HTML has paywalls enforced."""

    web: Optional[str] = UNSET
    """The web HTML rendered to a free or annonomous reader."""

    email: Optional[str] = UNSET
    """The email HTML rendered to a free reader."""

    rss: Optional[str] = UNSET
    """The HTML that is rendered in RSS feeds."""


class FreePostContentDict(TypedDict):
    web: NotRequired[str]
    email: NotRequired[str]
    rss: NotRequired[str]
