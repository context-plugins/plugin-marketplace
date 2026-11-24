from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .overall_percentage import OverallPercentage, OverallPercentageDict


class SummaryReportingReportsApi(SdkBaseModel):
    transaction_count: Optional[int] = Field(default=UNSET, alias="transactionCount")
    """Total number of transactions in the group"""

    overall_percentage: Optional[OverallPercentage] = Field(default=UNSET, alias="overallPercentage")


class SummaryReportingReportsApiDict(TypedDict):
    transaction_count: NotRequired[int]
    overall_percentage: NotRequired[OverallPercentageDict]
