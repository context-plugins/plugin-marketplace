from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GetUserLinks(SdkBaseModel):
    """Object containing links to resources."""

    accounts: str
    """Accounts reference url."""

    connections: str
    """Connections reference url."""

    self: str
    """User self reference url."""

    transactions: str
    """Transactions reference url."""


class GetUserLinksDict(TypedDict):
    accounts: str
    connections: str
    self: str
    transactions: str
