from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .usage_counter import UsageCounter, UsageCounterDict


class UsageResponse(SdkBaseModel):
    data_calls: UsageCounter
    keyword_alerts: UsageCounter
    period: str
    """Calendar month the usage counters cover (UTC, format ``YYYY-MM``)."""

    searches: UsageCounter
    semantic_searches: UsageCounter


class UsageResponseDict(TypedDict):
    data_calls: UsageCounterDict
    keyword_alerts: UsageCounterDict
    period: str
    searches: UsageCounterDict
    semantic_searches: UsageCounterDict
