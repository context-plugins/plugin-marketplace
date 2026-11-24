from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class InsiderTradesMonthBucket(SdkBaseModel):
    month: str
    """Calendar month, ``YYYY-MM``."""

    buy_count: int
    sell_count: int
    buy_value_usd: str
    """Decimal string in USD; ``"0"`` for a quiet side."""

    sell_value_usd: str


class InsiderTradesMonthBucketDict(TypedDict):
    month: str
    buy_count: int
    sell_count: int
    buy_value_usd: str
    sell_value_usd: str
