from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .links import Links, LinksDict
from .meta_givebutter_api_documentation_transactions_api import (
    MetaGivebutterApiDocumentationTransactionsApi,
    MetaGivebutterApiDocumentationTransactionsApiDict,
)
from .unions.transaction_resource2 import TransactionResource2, TransactionResource2Dict


class V1TransactionsResponse(SdkBaseModel):
    data: list[TransactionResource2]
    links: Links
    meta: MetaGivebutterApiDocumentationTransactionsApi


class V1TransactionsResponseDict(TypedDict):
    data: list[TransactionResource2Dict]
    links: LinksDict
    meta: MetaGivebutterApiDocumentationTransactionsApiDict
