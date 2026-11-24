from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .amount1 import Amount1, Amount1Dict
from .frequency_reporting_reports_api import FrequencyReportingReportsApi, FrequencyReportingReportsApiDict
from .range_reporting_reports_api import RangeReportingReportsApi, RangeReportingReportsApiDict
from .summary1 import Summary1, Summary1Dict


class Analysis1(SdkBaseModel):
    summary: Optional[Summary1] = UNSET
    range_: Optional[RangeReportingReportsApi] = Field(default=UNSET, alias="range")
    amount: Optional[Amount1] = UNSET
    frequency: Optional[FrequencyReportingReportsApi] = UNSET


class Analysis1Dict(TypedDict):
    summary: NotRequired[Summary1Dict]
    range_: NotRequired[RangeReportingReportsApiDict]
    amount: NotRequired[Amount1Dict]
    frequency: NotRequired[FrequencyReportingReportsApiDict]
