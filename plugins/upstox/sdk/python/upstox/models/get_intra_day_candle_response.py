from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .intra_day_candle_data2 import IntraDayCandleData2, IntraDayCandleData2Dict


class GetIntraDayCandleResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[IntraDayCandleData2] = UNSET
    """Get OHLC values for all instruments across various timeframes"""


class GetIntraDayCandleResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[IntraDayCandleData2Dict]
