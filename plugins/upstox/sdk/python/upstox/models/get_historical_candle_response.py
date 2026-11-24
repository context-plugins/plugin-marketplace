from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .historical_candle_data2 import HistoricalCandleData2, HistoricalCandleData2Dict


class GetHistoricalCandleResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[HistoricalCandleData2] = UNSET
    """Get OHLC values for all instruments across various timeframes"""


class GetHistoricalCandleResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[HistoricalCandleData2Dict]
