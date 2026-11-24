from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ItemsRequest(SdkBaseModel):
    name: str
    """Item display name."""

    description: Optional[str] = UNSET
    amount: int
    """Item price in paise."""

    currency: str = "INR"


class ItemsRequestDict(TypedDict):
    name: str
    description: NotRequired[str]
    amount: int
    currency: str
