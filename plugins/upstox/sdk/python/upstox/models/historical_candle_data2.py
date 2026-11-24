from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HistoricalCandleData2(SdkBaseModel):
    """Get OHLC values for all instruments across various timeframes"""

    candles: Optional[list[list[Any]]] = UNSET


class HistoricalCandleData2Dict(TypedDict):
    candles: NotRequired[list[list[Any]]]
