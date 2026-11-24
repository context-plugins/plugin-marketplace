from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RecapDecision(SdkBaseModel):
    timestamp: int
    text: str


class RecapDecisionDict(TypedDict):
    timestamp: int
    text: str
