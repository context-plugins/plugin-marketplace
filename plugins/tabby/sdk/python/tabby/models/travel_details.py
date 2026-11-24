from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TravelDetails(SdkBaseModel):
    """Required for travel insurance"""

    departure_country: str
    arrival_country: str


class TravelDetailsDict(TypedDict):
    departure_country: str
    arrival_country: str
