from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SettlementsOndemandRequest(SdkBaseModel):
    amount: int
    """Settlement amount in paise."""

    settle_full_balance: bool = False
    """Set true to settle the full available balance. Overrides amount."""

    description: Optional[str] = UNSET
    """Custom reference note. Max 30 alphanumeric characters."""

    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""


class SettlementsOndemandRequestDict(TypedDict):
    amount: int
    settle_full_balance: NotRequired[bool]
    description: NotRequired[str]
    notes: NotRequired[dict[str, str]]
