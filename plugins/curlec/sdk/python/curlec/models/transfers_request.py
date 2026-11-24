from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TransfersRequest(SdkBaseModel):
    account: str
    """Linked Account ID (acc_*)."""

    amount: int
    """Amount in paise. Minimum 10000 (₹100)."""

    currency: Literal["INR"] = "INR"
    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""

    linked_account_notes: Optional[list[str]] = UNSET
    on_hold: Optional[bool] = UNSET
    on_hold_until: Optional[int] = UNSET


class TransfersRequestDict(TypedDict):
    account: str
    amount: int
    currency: Literal["INR"]
    notes: NotRequired[dict[str, str]]
    linked_account_notes: NotRequired[list[str]]
    on_hold: NotRequired[bool]
    on_hold_until: NotRequired[int]
