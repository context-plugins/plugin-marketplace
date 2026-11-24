from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MarketQuoteSymbolLtp(SdkBaseModel):
    last_price: Optional[float] = UNSET
    """The last traded price of symbol"""

    instrument_token: Optional[str] = UNSET


class MarketQuoteSymbolLtpDict(TypedDict):
    last_price: NotRequired[float]
    instrument_token: NotRequired[str]
