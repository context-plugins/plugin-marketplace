from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.impact import ImpactOrStr


class StoryTickerTake(SdkBaseModel):
    ticker: str
    impact: ImpactOrStr
    """The summary's read of the event for this ticker — an editorial call, not a price label."""

    note: str
    """One line on why."""


class StoryTickerTakeDict(TypedDict):
    ticker: str
    impact: ImpactOrStr
    note: str
