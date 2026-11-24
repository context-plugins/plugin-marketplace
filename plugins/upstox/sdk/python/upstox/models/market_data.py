from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MarketData(SdkBaseModel):
    ltp: Optional[float] = UNSET
    volume: Optional[int] = UNSET
    oi: Optional[float] = UNSET
    close_price: Optional[float] = UNSET
    bid_price: Optional[float] = UNSET
    bid_qty: Optional[int] = UNSET
    ask_price: Optional[float] = UNSET
    ask_qty: Optional[int] = UNSET
    prev_oi: Optional[float] = UNSET


class MarketDataDict(TypedDict):
    ltp: NotRequired[float]
    volume: NotRequired[int]
    oi: NotRequired[float]
    close_price: NotRequired[float]
    bid_price: NotRequired[float]
    bid_qty: NotRequired[int]
    ask_price: NotRequired[float]
    ask_qty: NotRequired[int]
    prev_oi: NotRequired[float]
