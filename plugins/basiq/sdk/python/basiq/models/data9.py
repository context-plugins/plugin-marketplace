from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enrich import Enrich, EnrichDict
from .enums.class1_reporting_reports_api import Class1ReportingReportsApiOrStr
from .enums.direction import DirectionOrStr
from .enums.status_reporting_reports_api import StatusReportingReportsApiOrStr


class Data9(SdkBaseModel):
    type_: str = Field(alias="type")
    """Value is "transaction"."""

    id: str
    """Uniquely identifies the transaction for this connection. Note that when a connection is refreshed pending
    transactions will receive new id's, whilst posted transactions will receive the same id's as before the refresh."""

    account: str
    """The id of the account resource the transaction belongs to."""

    amount: str
    """Transaction amount. Outgoing funds are expressed as negative values."""

    balance: str
    """Value of the account balance at time the transaction was completed."""

    class_: Class1ReportingReportsApiOrStr = Field(alias="class")
    """Describes the class(type) of transaction."""

    connection: str
    """The id of the connection resource that was used to retrieve the transaction."""

    description: str
    """The transaction description as submitted by the institution.."""

    direction: DirectionOrStr
    """Identifies if the transaction is of debit or credit type."""

    enrich: Enrich
    institution: str
    """The id of the institution resource the transaction originated from."""

    post_date: str = Field(alias="postDate")
    """Date the transaction was posted as provided by the institution (this is the same date that appears on a bank
    statement). This value is null if the record is pending. e.g. "2017-11-10T21:46:44Z" or 2017-11-10T00:00:00Z."""

    status: StatusReportingReportsApiOrStr
    """Identifies if a transaction is pending or posted. A pending transaction is an approved debit or credit
    transaction that has not been fully processed yet (i.e. has not been posted). Find out more about pending
    transaction and how to deal with them within your app. Note that pending transactions are not available for all
    institutions."""

    transaction_date: str = Field(alias="transactionDate")
    """Date that the user executed the transaction as provided by the institution. Note that not all transactions
    provide this value (varies by institution) e.g. "2017-11-10T00:00:00Z"
    """


class Data9Dict(TypedDict):
    type_: str
    id: str
    account: str
    amount: str
    balance: str
    class_: Class1ReportingReportsApiOrStr
    connection: str
    description: str
    direction: DirectionOrStr
    enrich: EnrichDict
    institution: str
    post_date: str
    status: StatusReportingReportsApiOrStr
    transaction_date: str
