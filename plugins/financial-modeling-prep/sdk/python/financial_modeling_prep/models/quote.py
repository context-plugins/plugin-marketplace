from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Quote(SdkBaseModel):
    symbol: Optional[str] = UNSET
    name: Optional[str] = UNSET
    price: Optional[float] = UNSET
    changes_percentage: Optional[float] = Field(default=UNSET, alias="changesPercentage")
    change: Optional[float] = UNSET
    day_low: Optional[float] = Field(default=UNSET, alias="dayLow")
    day_high: Optional[float] = Field(default=UNSET, alias="dayHigh")
    year_high: Optional[float] = Field(default=UNSET, alias="yearHigh")
    year_low: Optional[float] = Field(default=UNSET, alias="yearLow")
    market_cap: Optional[float] = Field(default=UNSET, alias="marketCap")
    price_avg50: Optional[float] = Field(default=UNSET, alias="priceAvg50")
    price_avg200: Optional[float] = Field(default=UNSET, alias="priceAvg200")
    volume: Optional[int] = UNSET
    avg_volume: Optional[int] = Field(default=UNSET, alias="avgVolume")
    exchange: Optional[str] = UNSET
    open: Optional[float] = UNSET
    previous_close: Optional[float] = Field(default=UNSET, alias="previousClose")
    eps: Optional[float] = UNSET
    pe: Optional[float] = UNSET
    timestamp: Optional[int] = UNSET


class QuoteDict(TypedDict):
    symbol: NotRequired[str]
    name: NotRequired[str]
    price: NotRequired[float]
    changes_percentage: NotRequired[float]
    change: NotRequired[float]
    day_low: NotRequired[float]
    day_high: NotRequired[float]
    year_high: NotRequired[float]
    year_low: NotRequired[float]
    market_cap: NotRequired[float]
    price_avg50: NotRequired[float]
    price_avg200: NotRequired[float]
    volume: NotRequired[int]
    avg_volume: NotRequired[int]
    exchange: NotRequired[str]
    open: NotRequired[float]
    previous_close: NotRequired[float]
    eps: NotRequired[float]
    pe: NotRequired[float]
    timestamp: NotRequired[int]
