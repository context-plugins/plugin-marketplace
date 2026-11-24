from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MarketQuoteOptionGreekV3(SdkBaseModel):
    last_price: Optional[float] = UNSET
    instrument_token: Optional[str] = UNSET
    ltq: Optional[int] = UNSET
    volume: Optional[int] = UNSET
    cp: Optional[float] = UNSET
    iv: Optional[float] = UNSET
    vega: Optional[float] = UNSET
    gamma: Optional[float] = UNSET
    theta: Optional[float] = UNSET
    delta: Optional[float] = UNSET
    oi: Optional[float] = UNSET


class MarketQuoteOptionGreekV3Dict(TypedDict):
    last_price: NotRequired[float]
    instrument_token: NotRequired[str]
    ltq: NotRequired[int]
    volume: NotRequired[int]
    cp: NotRequired[float]
    iv: NotRequired[float]
    vega: NotRequired[float]
    gamma: NotRequired[float]
    theta: NotRequired[float]
    delta: NotRequired[float]
    oi: NotRequired[float]
