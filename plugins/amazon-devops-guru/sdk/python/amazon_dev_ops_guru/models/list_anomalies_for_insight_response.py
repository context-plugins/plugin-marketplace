from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .proactive_anomaly_summary import ProactiveAnomalySummary, ProactiveAnomalySummaryDict
from .reactive_anomaly_summary import ReactiveAnomalySummary, ReactiveAnomalySummaryDict


class ListAnomaliesForInsightResponse(SdkBaseModel):
    proactive_anomalies: Optional[list[ProactiveAnomalySummary]] = Field(default=UNSET, alias="ProactiveAnomalies")
    """An array of ProactiveAnomalySummary objects that represent the requested anomalies"""

    reactive_anomalies: Optional[list[ReactiveAnomalySummary]] = Field(default=UNSET, alias="ReactiveAnomalies")
    """An array of ReactiveAnomalySummary objects that represent the requested anomalies"""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """The pagination token to use to retrieve the next page of results for this operation. If there are no more pages,
    this value is null."""


class ListAnomaliesForInsightResponseDict(TypedDict):
    proactive_anomalies: NotRequired[list[ProactiveAnomalySummaryDict]]
    reactive_anomalies: NotRequired[list[ReactiveAnomalySummaryDict]]
    next_token: NotRequired[str]
