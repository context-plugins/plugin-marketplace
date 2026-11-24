from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AdNetworkReportSummaryMetrics(SdkBaseModel):
    opens: int
    """The approved number of unique opens."""

    verified_clicks: int
    """The approved number of verified clicks."""

    revenue: str
    """The formatted revenue approved for payment."""


class AdNetworkReportSummaryMetricsDict(TypedDict):
    opens: int
    verified_clicks: int
    revenue: str
