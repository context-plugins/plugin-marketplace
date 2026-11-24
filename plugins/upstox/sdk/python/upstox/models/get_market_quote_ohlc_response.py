from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .market_quote_ohlc import MarketQuoteOhlc, MarketQuoteOhlcDict


class GetMarketQuoteOhlcResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[dict[str, MarketQuoteOhlc]] = UNSET


class GetMarketQuoteOhlcResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[dict[str, MarketQuoteOhlcDict]]
