from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.holiday_type import HolidayTypeOrStr
from .exchange_timing_data import ExchangeTimingData, ExchangeTimingDataDict


class HolidayData(SdkBaseModel):
    date: Optional[RFC3339DateTime] = UNSET
    description: Optional[str] = UNSET
    holiday_type: Optional[HolidayTypeOrStr] = UNSET
    closed_exchanges: Optional[list[str]] = UNSET
    open_exchanges: Optional[list[ExchangeTimingData]] = UNSET


class HolidayDataDict(TypedDict):
    date: NotRequired[RFC3339DateTime]
    description: NotRequired[str]
    holiday_type: NotRequired[HolidayTypeOrStr]
    closed_exchanges: NotRequired[list[str]]
    open_exchanges: NotRequired[list[ExchangeTimingDataDict]]
