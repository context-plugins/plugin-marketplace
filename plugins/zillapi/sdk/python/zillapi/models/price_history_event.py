from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PriceHistoryEvent(SdkBaseModel):
    date: Optional[str] = UNSET
    """Event date (YYYY-MM-DD)."""

    event: Optional[str] = UNSET
    """e.g. "Listed for sale", "Sold"."""

    price: Optional[float] = UNSET
    price_change_rate: Optional[float] = Field(default=UNSET, alias="priceChangeRate")


class PriceHistoryEventDict(TypedDict):
    date: NotRequired[str]
    event: NotRequired[str]
    price: NotRequired[float]
    price_change_rate: NotRequired[float]
