from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .market_quote_symbol import MarketQuoteSymbol, MarketQuoteSymbolDict


class GetFullMarketQuoteResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[dict[str, MarketQuoteSymbol]] = UNSET


class GetFullMarketQuoteResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[dict[str, MarketQuoteSymbolDict]]
