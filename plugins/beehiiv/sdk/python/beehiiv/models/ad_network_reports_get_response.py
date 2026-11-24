from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .ad_network_report import AdNetworkReport, AdNetworkReportDict


class AdNetworkReportsGetResponse(SdkBaseModel):
    data: list[AdNetworkReport]
    """Advertisement performance and payment reports for the publication."""

    limit: int
    """The maximum number of reports returned."""

    page: int
    """The page number returned."""

    total_results: int
    """The total number of reports."""

    total_pages: int
    """The total number of pages."""


class AdNetworkReportsGetResponseDict(TypedDict):
    data: list[AdNetworkReportDict]
    limit: int
    page: int
    total_results: int
    total_pages: int
