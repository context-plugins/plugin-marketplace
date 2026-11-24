from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .back import Back, BackDict
from .unions.lay2 import Lay2, Lay2Dict


class MatchedOutcome(SdkBaseModel):
    name: str
    point: Optional[float] = UNSET
    """The line, on line markets."""

    back: list[Back]
    """Best price first."""

    lay: Optional[Lay2] = UNSET
    """Lowest price first. An array of exchange offers; on ``each-way`` and ``extra-place`` an object ``{win, place}``
    of two such arrays; absent on ``dutching``."""


class MatchedOutcomeDict(TypedDict):
    name: str
    point: NotRequired[float]
    back: list[BackDict]
    lay: NotRequired[Lay2Dict]
