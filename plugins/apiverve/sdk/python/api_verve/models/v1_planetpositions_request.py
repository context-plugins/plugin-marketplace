from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1PlanetpositionsRequest(SdkBaseModel):
    date: Optional[str] = UNSET
    """The date to get planetary position data for (MM-DD-YYYY)"""

    time: Optional[str] = UNSET
    """The time of day for the calculation (HH:mm format, 24-hour). Defaults to 00:00 if not provided"""

    lat: float
    """The latitude of the observer"""

    lon: float
    """The longitude of the observer"""

    alt: Optional[float] = UNSET
    """The altitude of the observer in meters"""

    planet: str
    """The planet to get position data for"""


class V1PlanetpositionsRequestDict(TypedDict):
    date: NotRequired[str]
    time: NotRequired[str]
    lat: float
    lon: float
    alt: NotRequired[float]
    planet: str
