from __future__ import annotations

from typing_extensions import TypedDict

from ..core import Date, SdkBaseModel


class InsiderTradesWeekBucket(SdkBaseModel):
    week_start: Date
    """Monday of the ISO week."""

    buy_count: int
    sell_count: int
    buy_value_usd: str
    sell_value_usd: str


class InsiderTradesWeekBucketDict(TypedDict):
    week_start: Date
    buy_count: int
    sell_count: int
    buy_value_usd: str
    sell_value_usd: str
