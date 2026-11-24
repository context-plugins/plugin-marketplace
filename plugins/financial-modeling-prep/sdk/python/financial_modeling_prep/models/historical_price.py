from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class HistoricalPrice(SdkBaseModel):
    date: Optional[Date] = UNSET
    open: Optional[float] = UNSET
    high: Optional[float] = UNSET
    low: Optional[float] = UNSET
    close: Optional[float] = UNSET
    adj_close: Optional[float] = Field(default=UNSET, alias="adjClose")
    volume: Optional[int] = UNSET


class HistoricalPriceDict(TypedDict):
    date: NotRequired[Date]
    open: NotRequired[float]
    high: NotRequired[float]
    low: NotRequired[float]
    close: NotRequired[float]
    adj_close: NotRequired[float]
    volume: NotRequired[int]
