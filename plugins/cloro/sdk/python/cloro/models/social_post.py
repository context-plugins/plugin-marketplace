from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SocialPost(SdkBaseModel):
    platform: Optional[str] = UNSET
    """Social platform name"""

    text: Optional[str] = UNSET
    """Post text content"""

    link: Optional[str] = UNSET
    """URL to the post"""

    date: Optional[str] = UNSET
    """Post date as displayed by Google"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect — the sibling link field holds the destination cloro resolved it
    to."""


class SocialPostDict(TypedDict):
    platform: NotRequired[str]
    text: NotRequired[str]
    link: NotRequired[str]
    date: NotRequired[str]
    redirect_link: NotRequired[str]
