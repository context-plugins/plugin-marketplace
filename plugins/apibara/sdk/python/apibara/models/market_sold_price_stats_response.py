from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data import Data, DataDict


class MarketSoldPriceStatsResponse(SdkBaseModel):
    ok: bool
    data: Data


class MarketSoldPriceStatsResponseDict(TypedDict):
    ok: bool
    data: DataDict
