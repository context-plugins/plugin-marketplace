from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NewsResult1(SdkBaseModel):
    position: Optional[float] = UNSET
    """Position in news results (1-indexed)"""

    title: Optional[str] = UNSET
    """Title of the news article"""

    link: Optional[str] = UNSET
    """URL of the news article"""

    snippet: Optional[str] = UNSET
    """Text snippet describing the article"""

    source: Optional[str] = UNSET
    """News source/publisher name"""

    date: Optional[str] = UNSET
    """Publication date"""

    page: Optional[float] = UNSET
    """Page number this result appeared on (1-indexed)"""

    thumbnail: Optional[str] = UNSET
    """Thumbnail image URL (if available)"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect. The sibling link field holds the destination cloro resolved it to,
    or is empty, missing or a ``google.com/goto`` URL when the link is not resolved yet. In that case, resolve this
    value with ``POST /v1/monitor/google/goto``."""


class NewsResult1Dict(TypedDict):
    position: NotRequired[float]
    title: NotRequired[str]
    link: NotRequired[str]
    snippet: NotRequired[str]
    source: NotRequired[str]
    date: NotRequired[str]
    page: NotRequired[float]
    thumbnail: NotRequired[str]
    redirect_link: NotRequired[str]
