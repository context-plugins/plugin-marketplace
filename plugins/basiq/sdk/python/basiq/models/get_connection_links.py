from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetConnectionLinks(SdkBaseModel):
    """Object containing links to resources."""

    accounts: Optional[str] = UNSET
    """Accounts reference url."""

    self: str
    """Connection self reference url."""

    transactions: Optional[str] = UNSET
    """Transactions reference url."""

    user: str
    """User reference url."""


class GetConnectionLinksDict(TypedDict):
    accounts: NotRequired[str]
    self: str
    transactions: NotRequired[str]
    user: str
