from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .sports import Sports, SportsDict


class BookmakerOddsRelayServiceApi(SdkBaseModel):
    key: str
    name: str
    sports: dict[str, Sports]


class BookmakerOddsRelayServiceApiDict(TypedDict):
    key: str
    name: str
    sports: dict[str, SportsDict]
