from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .hotel_itinerary import HotelItinerary, HotelItineraryDict
from .insurance import Insurance, InsuranceDict
from .passenger import Passenger, PassengerDict


class HotelReservationDetails(SdkBaseModel):
    pnr: Optional[str] = UNSET
    """Trip booking number, e.g. TR9088999"""

    hotel_itinerary: list[HotelItinerary]
    """Hotel itinerary data, one per segment"""

    insurance: list[Insurance]
    """Insurance data"""

    passengers: list[Passenger]
    """Passengers data"""

    affiliate_name: Optional[str] = UNSET
    """Name of the affiliate that originated the purchase. If none, leave blank."""


class HotelReservationDetailsDict(TypedDict):
    pnr: NotRequired[str]
    hotel_itinerary: list[HotelItineraryDict]
    insurance: list[InsuranceDict]
    passengers: list[PassengerDict]
    affiliate_name: NotRequired[str]
