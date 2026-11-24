from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Rating3(SdkBaseModel):
    platform: Optional[str] = UNSET
    """Review platform name"""

    rating: Optional[str] = UNSET
    """Rating value as displayed"""

    link: Optional[str] = UNSET
    """URL to the review page"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect. The sibling link field holds the destination cloro resolved it to,
    or is empty, missing or a ``google.com/goto`` URL when the link is not resolved yet. In that case, resolve this
    value with ``POST /v1/monitor/google/goto``."""


class Rating3Dict(TypedDict):
    platform: NotRequired[str]
    rating: NotRequired[str]
    link: NotRequired[str]
    redirect_link: NotRequired[str]
