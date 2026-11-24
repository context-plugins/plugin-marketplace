from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .class2 import Class2, Class2Dict
from .division_reporting_reports_api import DivisionReportingReportsApi, DivisionReportingReportsApiDict
from .group1_reporting_reports_api import Group1ReportingReportsApi, Group1ReportingReportsApiDict
from .subdivision_reporting_reports_api import SubdivisionReportingReportsApi, SubdivisionReportingReportsApiDict


class AnzsicReportingReportsApi(SdkBaseModel):
    class_: Optional[Class2] = Field(default=UNSET, alias="class")
    division: Optional[DivisionReportingReportsApi] = UNSET
    group: Optional[Group1ReportingReportsApi] = UNSET
    subdivision: Optional[SubdivisionReportingReportsApi] = UNSET


class AnzsicReportingReportsApiDict(TypedDict):
    class_: NotRequired[Class2Dict]
    division: NotRequired[DivisionReportingReportsApiDict]
    group: NotRequired[Group1ReportingReportsApiDict]
    subdivision: NotRequired[SubdivisionReportingReportsApiDict]
