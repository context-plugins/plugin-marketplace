from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data1_reporting_reports_api import Data1ReportingReportsApi, Data1ReportingReportsApiDict


class Reports400Error21(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always "list"."""

    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Data1ReportingReportsApi]
    """Error data."""


class Reports400Error21Dict(TypedDict):
    type_: str
    correlation_id: str
    data: list[Data1ReportingReportsApiDict]
