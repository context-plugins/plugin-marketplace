from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .sports import Sports, SportsDict


class Exchange(SdkBaseModel):
    key: str
    name: str
    sports: dict[str, Sports]


class ExchangeDict(TypedDict):
    key: str
    name: str
    sports: dict[str, SportsDict]
