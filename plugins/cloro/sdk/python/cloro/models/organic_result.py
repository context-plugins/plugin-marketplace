from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sitelinks import Sitelinks, SitelinksDict


class OrganicResult(SdkBaseModel):
    position: Optional[float] = UNSET
    """Position in search results (1-indexed)"""

    title: Optional[str] = UNSET
    """Title of the search result"""

    link: Optional[str] = UNSET
    """URL of the search result"""

    displayed_link: Optional[str] = Field(default=UNSET, alias="displayedLink")
    """Formatted URL as displayed in search results"""

    snippet: Optional[str] = UNSET
    """Text snippet describing the page content"""

    date: Optional[str] = UNSET
    """Publication date if available"""

    page: Optional[float] = UNSET
    """Page number this result appeared on (1-indexed)"""

    sitelinks: Optional[Sitelinks] = UNSET
    """Sitelinks displayed under the main result"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect — the sibling link field holds the destination cloro resolved it
    to."""


class OrganicResultDict(TypedDict):
    position: NotRequired[float]
    title: NotRequired[str]
    link: NotRequired[str]
    displayed_link: NotRequired[str]
    snippet: NotRequired[str]
    date: NotRequired[str]
    page: NotRequired[float]
    sitelinks: NotRequired[SitelinksDict]
    redirect_link: NotRequired[str]
