from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .matched_outcome import MatchedOutcome, MatchedOutcomeDict


class Market1(SdkBaseModel):
    key: str
    outcomes: list[MatchedOutcome]


class Market1Dict(TypedDict):
    key: str
    outcomes: list[MatchedOutcomeDict]
