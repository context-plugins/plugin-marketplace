from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data2_reporting_reports_api import Data2ReportingReportsApi, Data2ReportingReportsApiDict


class Reports403Error31(SdkBaseModel):
    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Data2ReportingReportsApi]
    """Error data."""


class Reports403Error31Dict(TypedDict):
    correlation_id: str
    data: list[Data2ReportingReportsApiDict]
