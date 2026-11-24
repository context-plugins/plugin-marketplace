from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetConnectionsLinks(SdkBaseModel):
    """Object containing links to resources."""

    accounts: Optional[str] = UNSET
    """Accounts reference url."""

    institution: str
    """Institution details."""

    self: str
    """Connection self reference url."""

    transactions: Optional[str] = UNSET
    """Transactions reference url."""


class GetConnectionsLinksDict(TypedDict):
    accounts: NotRequired[str]
    institution: str
    self: str
    transactions: NotRequired[str]
