from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .site_summary import SiteSummary, SiteSummaryDict


class SitesResponse(SdkBaseModel):
    sites: list[SiteSummary]


class SitesResponseDict(TypedDict):
    sites: list[SiteSummaryDict]
