from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status_odds_relay_discovery_api import StatusOddsRelayDiscoveryApiOrStr
from .unions.commence_time import CommenceTime, CommenceTimeDict


class Event(SdkBaseModel):
    id: str
    sport_key: str
    sport_title: str
    commence_time: CommenceTime | None
    home_team: str | None
    away_team: str | None
    status: StatusOddsRelayDiscoveryApiOrStr
    has_coverage: list[str]
    """The matched boards carrying it."""


class EventDict(TypedDict):
    id: str
    sport_key: str
    sport_title: str
    commence_time: CommenceTimeDict | None
    home_team: str | None
    away_team: str | None
    status: StatusOddsRelayDiscoveryApiOrStr
    has_coverage: list[str]
