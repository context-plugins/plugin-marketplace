from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .market_quote_option_greek_v3 import MarketQuoteOptionGreekV3, MarketQuoteOptionGreekV3Dict


class GetMarketQuoteOptionGreekResponseV3(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[dict[str, MarketQuoteOptionGreekV3]] = UNSET


class GetMarketQuoteOptionGreekResponseV3Dict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[dict[str, MarketQuoteOptionGreekV3Dict]]
