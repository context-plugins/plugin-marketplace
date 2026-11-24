from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Transfer(SdkBaseModel):
    account: Optional[str] = UNSET
    """Linked account ID."""

    amount: Optional[int] = UNSET
    currency: Optional[str] = UNSET
    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""


class TransferDict(TypedDict):
    account: NotRequired[str]
    amount: NotRequired[int]
    currency: NotRequired[str]
    notes: NotRequired[dict[str, str]]
