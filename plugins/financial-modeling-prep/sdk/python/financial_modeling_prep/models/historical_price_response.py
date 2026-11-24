from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .historical_price import HistoricalPrice, HistoricalPriceDict


class HistoricalPriceResponse(SdkBaseModel):
    symbol: Optional[str] = UNSET
    historical: Optional[list[HistoricalPrice]] = UNSET


class HistoricalPriceResponseDict(TypedDict):
    symbol: NotRequired[str]
    historical: NotRequired[list[HistoricalPriceDict]]
