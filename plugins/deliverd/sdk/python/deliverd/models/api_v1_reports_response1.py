from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .approval_deliverd_dev_reports_api import ApprovalDeliverdDevReportsApi, ApprovalDeliverdDevReportsApiDict
from .audience import Audience, AudienceDict
from .enums.status2 import Status2OrStr
from .report import Report, ReportDict
from .version_deliverd_dev_reports_api import VersionDeliverdDevReportsApi, VersionDeliverdDevReportsApiDict


class ApiV1ReportsResponse1(SdkBaseModel):
    report: Report
    version: VersionDeliverdDevReportsApi
    url: str
    warnings: list[str]
    audience: list[Audience]
    status: Status2OrStr
    approval: Optional[ApprovalDeliverdDevReportsApi] = UNSET


class ApiV1ReportsResponse1Dict(TypedDict):
    report: ReportDict
    version: VersionDeliverdDevReportsApiDict
    url: str
    warnings: list[str]
    audience: list[AudienceDict]
    status: Status2OrStr
    approval: NotRequired[ApprovalDeliverdDevReportsApiDict]
