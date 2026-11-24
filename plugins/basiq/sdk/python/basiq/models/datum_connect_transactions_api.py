from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enrich_connect_transactions_api import EnrichConnectTransactionsApi, EnrichConnectTransactionsApiDict
from .enums.class_connect_transactions_api import ClassConnectTransactionsApiOrStr
from .enums.currency import CurrencyOrStr
from .enums.direction import DirectionOrStr
from .enums.status_connect_transactions_api import StatusConnectTransactionsApiOrStr
from .links_connect_transactions_api import LinksConnectTransactionsApi, LinksConnectTransactionsApiDict
from .payment_details import PaymentDetails, PaymentDetailsDict
from .sub_class_connect_transactions_api import SubClassConnectTransactionsApi, SubClassConnectTransactionsApiDict


class DatumConnectTransactionsApi(SdkBaseModel):
    type_: str = Field(alias="type")
    """Value is "transaction"."""

    id: str
    """Uniquely identifies the transaction for this connection. Note that when a connection is refreshed pending
    transactions will receive new id's, whilst posted transactions will receive the same id's as before the refresh."""

    status: StatusConnectTransactionsApiOrStr
    """Identifies if a transaction is pending or posted. A pending transaction is an approved debit or credit
    transaction that has not been fully processed yet (i.e. has not been posted). Note that pending transactions are not
    available for all institutions."""

    description: str
    """The transaction description as submitted by the institution."""

    reference: str
    """The reference for the transaction provided by the originating institution."""

    amount: str
    """Transaction amount. Outgoing funds are expressed as negative values."""

    currency: CurrencyOrStr
    """Standard 3 character currency codes as per ISO-4217."""

    account: str
    """The id of the account resource the transaction belongs to."""

    balance: Optional[str] = UNSET
    """Account balance at the time the transaction was completed. Included for Web connection integrations. CDR does not
    supply transaction balance, so this field will be empty for CDR connections."""

    direction: DirectionOrStr
    """Identifies if the transaction is of debit or credit type."""

    class_: ClassConnectTransactionsApiOrStr = Field(alias="class")
    """Describes the class(type) of transaction."""

    institution: str
    """The id of the institution resource the transaction originated from."""

    connection: str
    """The id of the connection resource that was used to retrieve the transaction."""

    transaction_date: str = Field(alias="transactionDate")
    """Date that the user executed the transaction as provided by the institution. Note that not all transactions
    provide this value (varies by institution) e.g. "2017-11-10T00:00:00Z"
    """

    payment_details: OptionalNullable[PaymentDetails] = Field(default=UNSET, alias="paymentDetails")
    post_date: str = Field(alias="postDate")
    """Date the transaction was posted as provided by the institution. This value is null if the record is pending. e.g.
    "2017-11-10T21:46:44Z" or 2017-11-10T00:00:00Z."""

    sub_class: SubClassConnectTransactionsApi = Field(alias="subClass")
    """The subClass attribute will only return values for payment transactions (i.e. will be empty for all others) plus
    [new] bank fee transactions for those relating to account conduct such as account overdrawn and direct debit
    dishonours."""

    enrich: EnrichConnectTransactionsApi
    links: LinksConnectTransactionsApi


class DatumConnectTransactionsApiDict(TypedDict):
    type_: str
    id: str
    status: StatusConnectTransactionsApiOrStr
    description: str
    reference: str
    amount: str
    currency: CurrencyOrStr
    account: str
    balance: NotRequired[str]
    direction: DirectionOrStr
    class_: ClassConnectTransactionsApiOrStr
    institution: str
    connection: str
    transaction_date: str
    payment_details: NotRequired[PaymentDetailsDict | None]
    post_date: str
    sub_class: SubClassConnectTransactionsApiDict
    enrich: EnrichConnectTransactionsApiDict
    links: LinksConnectTransactionsApiDict
