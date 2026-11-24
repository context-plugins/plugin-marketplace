from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExchangeTimingData(SdkBaseModel):
    exchange: Optional[str] = UNSET
    start_time: Optional[int] = UNSET
    end_time: Optional[int] = UNSET


class ExchangeTimingDataDict(TypedDict):
    exchange: NotRequired[str]
    start_time: NotRequired[int]
    end_time: NotRequired[int]
