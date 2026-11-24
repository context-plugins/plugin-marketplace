from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum1_reporting_reports_api import Datum1ReportingReportsApi, Datum1ReportingReportsApiDict


class ReportsResponse11(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always "list"."""

    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Datum1ReportingReportsApi]
    """Error data."""


class ReportsResponse11Dict(TypedDict):
    type_: str
    correlation_id: str
    data: list[Datum1ReportingReportsApiDict]
