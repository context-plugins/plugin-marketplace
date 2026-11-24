from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WebRating(SdkBaseModel):
    platform: Optional[str] = UNSET
    """Rating platform name"""

    rating: Optional[str] = UNSET
    """Rating value as displayed"""

    link: Optional[str] = UNSET
    """URL to the platform's review page"""

    votes: Optional[str] = UNSET
    """Number of votes or reviews (omitted when not available)"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect — the sibling link field holds the destination cloro resolved it
    to."""


class WebRatingDict(TypedDict):
    platform: NotRequired[str]
    rating: NotRequired[str]
    link: NotRequired[str]
    votes: NotRequired[str]
    redirect_link: NotRequired[str]
