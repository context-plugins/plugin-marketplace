from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .market_quote_symbol_ltp import MarketQuoteSymbolLtp, MarketQuoteSymbolLtpDict


class GetMarketQuoteLastTradedPriceResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[dict[str, MarketQuoteSymbolLtp]] = UNSET


class GetMarketQuoteLastTradedPriceResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[dict[str, MarketQuoteSymbolLtpDict]]
