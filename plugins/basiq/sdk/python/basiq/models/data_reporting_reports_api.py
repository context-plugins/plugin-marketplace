from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .account_reporting_reports_api import AccountReportingReportsApi, AccountReportingReportsApiDict
from .group_reporting_reports_api import GroupReportingReportsApi, GroupReportingReportsApiDict
from .metric import Metric, MetricDict


class DataReportingReportsApi(SdkBaseModel):
    metrics: Optional[list[Metric]] = UNSET
    groups: Optional[list[GroupReportingReportsApi]] = UNSET
    accounts: Optional[list[AccountReportingReportsApi]] = UNSET


class DataReportingReportsApiDict(TypedDict):
    metrics: NotRequired[list[MetricDict]]
    groups: NotRequired[list[GroupReportingReportsApiDict]]
    accounts: NotRequired[list[AccountReportingReportsApiDict]]
