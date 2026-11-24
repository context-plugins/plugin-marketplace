from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .datum_connect_transactions_api import DatumConnectTransactionsApi, DatumConnectTransactionsApiDict
from .links1_connect_transactions_api import Links1ConnectTransactionsApi, Links1ConnectTransactionsApiDict


class TransactionsContainerObjectConnectTransactionsApi(SdkBaseModel):
    """A transaction object is created whenever money is debited or credited from a particular account."""

    type_: str = Field(alias="type")
    """Value is "list"."""

    count: int
    """Count of the transactions in the response."""

    size: int
    data: list[DatumConnectTransactionsApi]
    links: Optional[Links1ConnectTransactionsApi] = UNSET


class TransactionsContainerObjectConnectTransactionsApiDict(TypedDict):
    type_: str
    count: int
    size: int
    data: list[DatumConnectTransactionsApiDict]
    links: NotRequired[Links1ConnectTransactionsApiDict]
