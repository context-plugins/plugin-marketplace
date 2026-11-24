from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .market_quote_symbol_ltp_v3 import MarketQuoteSymbolLtpV3, MarketQuoteSymbolLtpV3Dict


class GetMarketQuoteLastTradedPriceResponseV3(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[dict[str, MarketQuoteSymbolLtpV3]] = UNSET


class GetMarketQuoteLastTradedPriceResponseV3Dict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[dict[str, MarketQuoteSymbolLtpV3Dict]]
