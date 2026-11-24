from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .attachment_payment_history_full import AttachmentPaymentHistoryFull, AttachmentPaymentHistoryFullDict
from .attachment_payment_history_simple import AttachmentPaymentHistorySimple, AttachmentPaymentHistorySimpleDict
from .education_details import EducationDetails, EducationDetailsDict
from .flight_points_simple import FlightPointsSimple, FlightPointsSimpleDict
from .flight_reservation_details import FlightReservationDetails, FlightReservationDetailsDict
from .hotel_reservation_details import HotelReservationDetails, HotelReservationDetailsDict
from .insurance_details import InsuranceDetails, InsuranceDetailsDict
from .marketplaces import Marketplaces, MarketplacesDict


class Body(SdkBaseModel):
    """Should be an object containing any of the keys with corresponded sub objects"""

    flight_reservation_details: Optional[FlightReservationDetails] = UNSET
    hotel_reservation_details: Optional[HotelReservationDetails] = UNSET
    insurance_details: Optional[InsuranceDetails] = UNSET
    payment_history_full: Optional[AttachmentPaymentHistoryFull] = UNSET
    payment_history_simple: Optional[AttachmentPaymentHistorySimple] = UNSET
    flight_points_simple: Optional[FlightPointsSimple] = UNSET
    marketplaces: Optional[Marketplaces] = UNSET
    """Sellers' details within marketplaces."""

    education_details: Optional[EducationDetails] = UNSET
    """Education-vertical risk signals for the current session."""


class BodyDict(TypedDict):
    flight_reservation_details: NotRequired[FlightReservationDetailsDict]
    hotel_reservation_details: NotRequired[HotelReservationDetailsDict]
    insurance_details: NotRequired[InsuranceDetailsDict]
    payment_history_full: NotRequired[AttachmentPaymentHistoryFullDict]
    payment_history_simple: NotRequired[AttachmentPaymentHistorySimpleDict]
    flight_points_simple: NotRequired[FlightPointsSimpleDict]
    marketplaces: NotRequired[MarketplacesDict]
    education_details: NotRequired[EducationDetailsDict]
