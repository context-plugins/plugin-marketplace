from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .class_reporting_reports_api import ClassReportingReportsApi, ClassReportingReportsApiDict
from .links3_reporting_reports_api import Links3ReportingReportsApi, Links3ReportingReportsApiDict
from .transaction_interval_reporting_reports_api import (
    TransactionIntervalReportingReportsApi,
    TransactionIntervalReportingReportsApiDict,
)


class AccountReportingReportsApi(SdkBaseModel):
    id: Optional[str] = UNSET
    """Identifier for the account"""

    account_no: Optional[str] = Field(default=UNSET, alias="accountNo")
    """Account number"""

    name: Optional[str] = UNSET
    """Name of the account"""

    currency: Optional[str] = UNSET
    """Currency of the account"""

    balance: Optional[str] = UNSET
    """Current balance of the account"""

    available_funds: Optional[str] = Field(default=UNSET, alias="availableFunds")
    """Available funds in the account"""

    last_updated: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdated")
    """Date and time when the account was last updated"""

    institution: Optional[str] = UNSET
    """Institution of the account"""

    class_: Optional[ClassReportingReportsApi] = Field(default=UNSET, alias="class")
    transaction_intervals: Optional[list[TransactionIntervalReportingReportsApi]] = Field(
        default=UNSET, alias="transactionIntervals"
    )
    account_holder: Optional[str] = Field(default=UNSET, alias="accountHolder")
    """Holder of the account"""

    account_ownership: Optional[str] = Field(default=UNSET, alias="accountOwnership")
    """Ownership status of the account"""

    connection: Optional[str] = UNSET
    """connectionID of that account"""

    status: Optional[str] = UNSET
    """Status of the account"""

    credit_limit: Optional[str] = Field(default=UNSET, alias="creditLimit")
    """Credit limit of the account"""

    links: Optional[Links3ReportingReportsApi] = UNSET


class AccountReportingReportsApiDict(TypedDict):
    id: NotRequired[str]
    account_no: NotRequired[str]
    name: NotRequired[str]
    currency: NotRequired[str]
    balance: NotRequired[str]
    available_funds: NotRequired[str]
    last_updated: NotRequired[RFC3339DateTime]
    institution: NotRequired[str]
    class_: NotRequired[ClassReportingReportsApiDict]
    transaction_intervals: NotRequired[list[TransactionIntervalReportingReportsApiDict]]
    account_holder: NotRequired[str]
    account_ownership: NotRequired[str]
    connection: NotRequired[str]
    status: NotRequired[str]
    credit_limit: NotRequired[str]
    links: NotRequired[Links3ReportingReportsApiDict]
