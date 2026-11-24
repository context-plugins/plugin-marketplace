from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .market1 import Market1, Market1Dict
from .unions.commence_time import CommenceTime, CommenceTimeDict


class MatchedEvent(SdkBaseModel):
    """One fixture. Ids are opaque and stable across boards (one fixture is one id on every route), but not durable
    keys: a paired fixture re-keys once when a higher-ranked exchange lists it."""

    event_id: str
    sport_key: str
    sport_title: str
    commence_time: CommenceTime | None
    home_team: OptionalNullable[str] = UNSET
    """Team sports."""

    away_team: OptionalNullable[str] = UNSET
    """Team sports."""

    event_name: Optional[str] = UNSET
    """A team fixture that does not split into sides."""

    venue: OptionalNullable[str] = UNSET
    """Racing: the course."""

    markets: list[Market1]


class MatchedEventDict(TypedDict):
    event_id: str
    sport_key: str
    sport_title: str
    commence_time: CommenceTimeDict | None
    home_team: NotRequired[str | None]
    away_team: NotRequired[str | None]
    event_name: NotRequired[str]
    venue: NotRequired[str | None]
    markets: list[Market1Dict]
