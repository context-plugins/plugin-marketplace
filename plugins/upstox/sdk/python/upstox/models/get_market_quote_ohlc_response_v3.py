from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .market_quote_ohlcv3 import MarketQuoteOhlcv3, MarketQuoteOhlcv3Dict


class GetMarketQuoteOhlcResponseV3(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[dict[str, MarketQuoteOhlcv3]] = UNSET


class GetMarketQuoteOhlcResponseV3Dict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[dict[str, MarketQuoteOhlcv3Dict]]
