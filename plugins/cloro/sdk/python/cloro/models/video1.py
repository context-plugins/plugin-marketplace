from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Video1(SdkBaseModel):
    title: str
    """Video title"""

    link: str
    """Canonical watch URL (timestamp parameters stripped)"""

    platform: Optional[str] = UNSET
    """Hosting platform parsed from the card byline"""

    channel: Optional[str] = UNSET
    """Channel or uploader name"""

    duration: Optional[str] = UNSET
    """Visible duration label (mm:ss or hh:mm:ss)"""

    thumbnail: Optional[str] = UNSET
    """Public thumbnail URL"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect — the sibling link field holds the destination cloro resolved it
    to."""


class Video1Dict(TypedDict):
    title: str
    link: str
    platform: NotRequired[str]
    channel: NotRequired[str]
    duration: NotRequired[str]
    thumbnail: NotRequired[str]
    redirect_link: NotRequired[str]
