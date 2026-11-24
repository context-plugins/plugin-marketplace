from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .insurance import Insurance, InsuranceDict
from .itinerary import Itinerary, ItineraryDict
from .passenger1 import Passenger1, Passenger1Dict


class FlightReservationDetails(SdkBaseModel):
    pnr: Optional[str] = UNSET
    """Trip booking number, e.g. TR9088999"""

    itinerary: list[Itinerary]
    """Itinerary data, one per segment"""

    insurance: list[Insurance]
    """Insurance data"""

    passengers: list[Passenger1]
    """Passengers data"""

    affiliate_name: Optional[str] = UNSET
    """Name of the affiliate that originated the purchase. If none, leave blank."""


class FlightReservationDetailsDict(TypedDict):
    pnr: NotRequired[str]
    itinerary: list[ItineraryDict]
    insurance: list[InsuranceDict]
    passengers: list[Passenger1Dict]
    affiliate_name: NotRequired[str]
