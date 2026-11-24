from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sitelinks2 import Sitelinks2, Sitelinks2Dict


class OrganicResult1(SdkBaseModel):
    position: Optional[float] = UNSET
    """Position in search results (1-indexed)"""

    title: Optional[str] = UNSET
    """Title of the search result"""

    link: Optional[str] = UNSET
    """URL of the search result. Empty when the link is not resolved yet: read ``redirectLink`` and resolve it with
    ``POST /v1/monitor/google/goto``."""

    displayed_link: Optional[str] = Field(default=UNSET, alias="displayedLink")
    """Formatted URL as displayed in search results"""

    snippet: Optional[str] = UNSET
    """Text snippet describing the page content"""

    date: Optional[str] = UNSET
    """Publication date if available"""

    extensions: Optional[list[str]] = UNSET
    """Engagement counts that Google shows on video, social and forum results, such as views, comments or followers.
    Present only when Google shows them."""

    page: Optional[float] = UNSET
    """Page number this result appeared on (1-indexed)"""

    sitelinks: Optional[Sitelinks2] = UNSET
    """Sitelinks displayed under the main result"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect. The sibling link field holds the destination cloro resolved it to,
    or is empty, missing or a ``google.com/goto`` URL when the link is not resolved yet. In that case, resolve this
    value with ``POST /v1/monitor/google/goto``."""


class OrganicResult1Dict(TypedDict):
    position: NotRequired[float]
    title: NotRequired[str]
    link: NotRequired[str]
    displayed_link: NotRequired[str]
    snippet: NotRequired[str]
    date: NotRequired[str]
    extensions: NotRequired[list[str]]
    page: NotRequired[float]
    sitelinks: NotRequired[Sitelinks2Dict]
    redirect_link: NotRequired[str]
