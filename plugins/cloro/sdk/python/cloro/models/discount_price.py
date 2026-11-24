from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DiscountPrice(SdkBaseModel):
    """Discount price, same shape as ``price``. May be null or absent."""

    amount: Optional[float] = UNSET
    """Price amount"""

    currency: Optional[str] = UNSET
    """Currency code (optional)"""

    currency_symbol: Optional[str] = Field(default=UNSET, alias="currencySymbol")
    """Currency symbol"""


class DiscountPriceDict(TypedDict):
    amount: NotRequired[float]
    currency: NotRequired[str]
    currency_symbol: NotRequired[str]
