from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MerchantVideo(SdkBaseModel):
    title: Optional[str] = UNSET
    """Video title"""

    link: Optional[str] = UNSET
    """Video URL"""

    platform: Optional[str] = UNSET
    """Video platform — omitted when not available"""

    duration: Optional[str] = UNSET
    """Video duration as displayed — omitted when not available"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect — the sibling link field holds the destination cloro resolved it
    to."""


class MerchantVideoDict(TypedDict):
    title: NotRequired[str]
    link: NotRequired[str]
    platform: NotRequired[str]
    duration: NotRequired[str]
    redirect_link: NotRequired[str]
