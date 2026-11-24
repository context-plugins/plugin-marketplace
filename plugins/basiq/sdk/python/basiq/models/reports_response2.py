from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .datum5_reporting_reports_api import Datum5ReportingReportsApi, Datum5ReportingReportsApiDict
from .links2_reporting_reports_api import Links2ReportingReportsApi, Links2ReportingReportsApiDict


class ReportsResponse2(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Always "list"."""

    count: Optional[int] = UNSET
    """Count of items in the response."""

    size: Optional[int] = UNSET
    """Size of the pages in the response."""

    data: Optional[list[Datum5ReportingReportsApi]] = UNSET
    links: Optional[Links2ReportingReportsApi] = UNSET


class ReportsResponse2Dict(TypedDict):
    type_: NotRequired[str]
    count: NotRequired[int]
    size: NotRequired[int]
    data: NotRequired[list[Datum5ReportingReportsApiDict]]
    links: NotRequired[Links2ReportingReportsApiDict]
