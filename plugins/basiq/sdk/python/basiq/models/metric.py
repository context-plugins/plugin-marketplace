from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .result_reporting_reports_api import ResultReportingReportsApi, ResultReportingReportsApiDict


class Metric(SdkBaseModel):
    id: Optional[str] = UNSET
    """Identifier for the metric"""

    title: Optional[str] = UNSET
    """Title of the metric"""

    description: Optional[str] = UNSET
    """Description of the metric"""

    sections: Optional[list[str]] = UNSET
    result: Optional[ResultReportingReportsApi] = UNSET


class MetricDict(TypedDict):
    id: NotRequired[str]
    title: NotRequired[str]
    description: NotRequired[str]
    sections: NotRequired[list[str]]
    result: NotRequired[ResultReportingReportsApiDict]
