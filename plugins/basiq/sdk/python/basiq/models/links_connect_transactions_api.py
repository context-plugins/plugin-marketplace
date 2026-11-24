from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class LinksConnectTransactionsApi(SdkBaseModel):
    account: str
    """Url of the account."""

    institution: str
    """Url of the institution."""

    self: str
    """Transaction self reference."""


class LinksConnectTransactionsApiDict(TypedDict):
    account: str
    institution: str
    self: str
