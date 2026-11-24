from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .bookmaker import Bookmaker, BookmakerDict
from .unions.commence_time import CommenceTime, CommenceTimeDict


class RawEvent(SdkBaseModel):
    id: str
    cluster_id: str | None
    sport_key: str
    sport_title: str
    commence_time: CommenceTime | None
    home_team: str | None
    away_team: str | None
    bookmakers: list[Bookmaker]


class RawEventDict(TypedDict):
    id: str
    cluster_id: str | None
    sport_key: str
    sport_title: str
    commence_time: CommenceTimeDict | None
    home_team: str | None
    away_team: str | None
    bookmakers: list[BookmakerDict]
