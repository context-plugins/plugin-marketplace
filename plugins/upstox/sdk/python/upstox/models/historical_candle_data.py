from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HistoricalCandleData(SdkBaseModel):
    candles: Optional[list[list[Any]]] = UNSET


class HistoricalCandleDataDict(TypedDict):
    candles: NotRequired[list[list[Any]]]
