from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SubClassConnectTransactionsApi(SdkBaseModel):
    """The subClass attribute will only return values for payment transactions (i.e. will be empty for all others) plus
    [new] bank fee transactions for those relating to account conduct such as account overdrawn and direct debit
    dishonours."""

    code: Optional[str] = UNSET
    """code"""

    title: Optional[str] = UNSET
    """SubClass title"""


class SubClassConnectTransactionsApiDict(TypedDict):
    code: NotRequired[str]
    title: NotRequired[str]
