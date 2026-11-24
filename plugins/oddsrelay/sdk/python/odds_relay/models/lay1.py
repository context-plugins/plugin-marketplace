from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .place import Place, PlaceDict
from .win import Win, WinDict


class Lay1(SdkBaseModel):
    win: list[Win]
    place: list[Place]


class Lay1Dict(TypedDict):
    win: list[WinDict]
    place: list[PlaceDict]
