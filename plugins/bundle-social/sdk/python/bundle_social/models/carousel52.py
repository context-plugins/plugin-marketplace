from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .card52 import Card52, Card52Dict


class Carousel52(SdkBaseModel):
    cards: list[Card52]


class Carousel52Dict(TypedDict):
    cards: list[Card52Dict]
