from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .amount import Amount, AmountDict
from .frequency_reporting_reports_api import FrequencyReportingReportsApi, FrequencyReportingReportsApiDict
from .range_reporting_reports_api import RangeReportingReportsApi, RangeReportingReportsApiDict
from .summary_reporting_reports_api import SummaryReportingReportsApi, SummaryReportingReportsApiDict


class Analysis(SdkBaseModel):
    summary: Optional[SummaryReportingReportsApi] = UNSET
    range_: Optional[RangeReportingReportsApi] = Field(default=UNSET, alias="range")
    amount: Optional[Amount] = UNSET
    frequency: Optional[FrequencyReportingReportsApi] = UNSET


class AnalysisDict(TypedDict):
    summary: NotRequired[SummaryReportingReportsApiDict]
    range_: NotRequired[RangeReportingReportsApiDict]
    amount: NotRequired[AmountDict]
    frequency: NotRequired[FrequencyReportingReportsApiDict]
