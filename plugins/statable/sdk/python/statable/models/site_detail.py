from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SiteDetail(SdkBaseModel):
    site_id: int
    name: str
    """The site url as stored."""

    hash: str
    """Same token as in SiteSummary.hash."""

    timezone: str
    week_start: int
    hobby: bool
    script_url: str
    snippet: str
    """The ready-to-paste script tag."""


class SiteDetailDict(TypedDict):
    site_id: int
    name: str
    hash: str
    timezone: str
    week_start: int
    hobby: bool
    script_url: str
    snippet: str
