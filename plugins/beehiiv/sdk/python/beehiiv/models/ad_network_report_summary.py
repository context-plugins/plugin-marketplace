from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ad_network_report_summary_metrics1 import AdNetworkReportSummaryMetrics1, AdNetworkReportSummaryMetrics1Dict
from .ad_network_report_summary_metrics2 import AdNetworkReportSummaryMetrics2, AdNetworkReportSummaryMetrics2Dict


class AdNetworkReportSummary(SdkBaseModel):
    publication_id: Optional[str] = UNSET
    """The prefixed publication ID. Omitted from account-wide summaries."""

    opens: int
    """The total approved number of unique opens."""

    verified_clicks: int
    """The total approved number of verified clicks."""

    revenue: str
    """The total formatted revenue approved for payment."""

    oda: AdNetworkReportSummaryMetrics1
    """Metrics for advertisements accepted as on-demand offers."""

    programmatic: AdNetworkReportSummaryMetrics2
    """Metrics for advertisements placed through programmatic ad slots."""


class AdNetworkReportSummaryDict(TypedDict):
    publication_id: NotRequired[str]
    opens: int
    verified_clicks: int
    revenue: str
    oda: AdNetworkReportSummaryMetrics1Dict
    programmatic: AdNetworkReportSummaryMetrics2Dict
