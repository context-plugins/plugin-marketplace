from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .data_reporting_reports_api import DataReportingReportsApi, DataReportingReportsApiDict
from .filter2 import Filter2, Filter2Dict
from .links4_reporting_reports_api import Links4ReportingReportsApi, Links4ReportingReportsApiDict


class ReportsResponse3(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Type of the report"""

    id: Optional[str] = UNSET
    """Unique identifier for the report"""

    title: Optional[str] = UNSET
    """Title of the report"""

    report_type: Optional[str] = Field(default=UNSET, alias="reportType")
    """Type of the report"""

    created_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdDate")
    """Date and time when the report was created"""

    created_by: Optional[str] = Field(default=UNSET, alias="createdBy")
    """Creator of the report"""

    filters: Optional[list[Filter2]] = UNSET
    data: Optional[DataReportingReportsApi] = UNSET
    transactions: Optional[str] = UNSET
    """Link to retrieve the transactions for the account"""

    links: Optional[Links4ReportingReportsApi] = UNSET


class ReportsResponse3Dict(TypedDict):
    type_: NotRequired[str]
    id: NotRequired[str]
    title: NotRequired[str]
    report_type: NotRequired[str]
    created_date: NotRequired[RFC3339DateTime]
    created_by: NotRequired[str]
    filters: NotRequired[list[Filter2Dict]]
    data: NotRequired[DataReportingReportsApiDict]
    transactions: NotRequired[str]
    links: NotRequired[Links4ReportingReportsApiDict]
