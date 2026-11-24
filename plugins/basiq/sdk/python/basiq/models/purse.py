from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Purse(SdkBaseModel):
    amount: str
    """The balance available for this additional currency purse."""

    currency: Optional[str] = UNSET
    """The currency for the purse."""


class PurseDict(TypedDict):
    amount: str
    currency: NotRequired[str]
