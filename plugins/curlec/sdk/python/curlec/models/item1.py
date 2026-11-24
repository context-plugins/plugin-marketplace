from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Item1(SdkBaseModel):
    name: str
    """Plan display name shown to customers."""

    description: Optional[str] = UNSET
    amount: int
    """Charge amount in paise per billing cycle."""

    currency: str = "INR"


class Item1Dict(TypedDict):
    name: str
    description: NotRequired[str]
    amount: int
    currency: str
