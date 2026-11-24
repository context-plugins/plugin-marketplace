from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PremiumPostContent(SdkBaseModel):
    """The requested premium post HTML. This HTML does not have paywalls enforced."""

    web: Optional[str] = UNSET
    """The website HTML rendered to a free reader"""

    email: Optional[str] = UNSET
    """The email HTML rendered to a premium reader"""


class PremiumPostContentDict(TypedDict):
    web: NotRequired[str]
    email: NotRequired[str]
