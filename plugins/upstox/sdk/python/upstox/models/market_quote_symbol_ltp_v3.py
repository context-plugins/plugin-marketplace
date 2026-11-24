from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MarketQuoteSymbolLtpV3(SdkBaseModel):
    last_price: Optional[float] = UNSET
    instrument_token: Optional[str] = UNSET
    ltq: Optional[int] = UNSET
    volume: Optional[int] = UNSET
    cp: Optional[float] = UNSET


class MarketQuoteSymbolLtpV3Dict(TypedDict):
    last_price: NotRequired[float]
    instrument_token: NotRequired[str]
    ltq: NotRequired[int]
    volume: NotRequired[int]
    cp: NotRequired[float]
