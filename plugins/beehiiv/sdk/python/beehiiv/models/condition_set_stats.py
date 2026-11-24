from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ConditionSetStats(SdkBaseModel):
    active_subscriber_count: int
    """Count of active subscribers matching this condition set, calculated synchronously at request time."""


class ConditionSetStatsDict(TypedDict):
    active_subscriber_count: int
