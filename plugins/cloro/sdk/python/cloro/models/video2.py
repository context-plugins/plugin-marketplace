from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Video2(SdkBaseModel):
    url: Optional[str] = UNSET
    """Direct URL to the video"""

    title: Optional[str] = UNSET
    """Video title"""

    thumbnail: Optional[str] = UNSET
    """Thumbnail image URL"""

    source: Optional[str] = UNSET
    """Channel or source name"""

    platform: Optional[str] = UNSET
    """Video platform"""

    date: Optional[str] = UNSET
    """Upload date"""

    duration: Optional[str] = UNSET
    """Video duration"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect. The sibling link field holds the destination cloro resolved it to,
    or is empty, missing or a ``google.com/goto`` URL when the link is not resolved yet. In that case, resolve this
    value with ``POST /v1/monitor/google/goto``."""


class Video2Dict(TypedDict):
    url: NotRequired[str]
    title: NotRequired[str]
    thumbnail: NotRequired[str]
    source: NotRequired[str]
    platform: NotRequired[str]
    date: NotRequired[str]
    duration: NotRequired[str]
    redirect_link: NotRequired[str]
