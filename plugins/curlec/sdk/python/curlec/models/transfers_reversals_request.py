from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TransfersReversalsRequest(SdkBaseModel):
    amount: Optional[int] = UNSET
    """Amount to reverse in paise. Omit to reverse the full remaining amount."""

    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""


class TransfersReversalsRequestDict(TypedDict):
    amount: NotRequired[int]
    notes: NotRequired[dict[str, str]]
