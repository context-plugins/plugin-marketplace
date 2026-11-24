from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Stats(SdkBaseModel):
    total_contributions: str
    recurring_contributions: str


class StatsDict(TypedDict):
    total_contributions: str
    recurring_contributions: str
