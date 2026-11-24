from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .class1_connect_transactions_api import Class1ConnectTransactionsApi, Class1ConnectTransactionsApiDict
from .division_reporting_reports_api import DivisionReportingReportsApi, DivisionReportingReportsApiDict
from .group_connect_transactions_api import GroupConnectTransactionsApi, GroupConnectTransactionsApiDict
from .subclass1 import Subclass1, Subclass1Dict
from .subdivision_reporting_reports_api import SubdivisionReportingReportsApi, SubdivisionReportingReportsApiDict


class AnzsicConnectTransactionsApi(SdkBaseModel):
    division: Optional[DivisionReportingReportsApi] = UNSET
    subdivision: Optional[SubdivisionReportingReportsApi] = UNSET
    group: Optional[GroupConnectTransactionsApi] = UNSET
    class_: Optional[Class1ConnectTransactionsApi] = Field(default=UNSET, alias="class")
    subclass: Optional[Subclass1] = UNSET


class AnzsicConnectTransactionsApiDict(TypedDict):
    division: NotRequired[DivisionReportingReportsApiDict]
    subdivision: NotRequired[SubdivisionReportingReportsApiDict]
    group: NotRequired[GroupConnectTransactionsApiDict]
    class_: NotRequired[Class1ConnectTransactionsApiDict]
    subclass: NotRequired[Subclass1Dict]
