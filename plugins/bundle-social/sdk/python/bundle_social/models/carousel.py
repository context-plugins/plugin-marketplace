from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .card import Card, CardDict


class Carousel(SdkBaseModel):
    cards: list[Card]


class CarouselDict(TypedDict):
    cards: list[CardDict]
