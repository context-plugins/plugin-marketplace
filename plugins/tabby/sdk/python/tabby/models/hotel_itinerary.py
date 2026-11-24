from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class HotelItinerary(SdkBaseModel):
    hotel_name: Optional[str] = UNSET
    address: Optional[str] = UNSET
    hotel_city: Optional[str] = UNSET
    hotel_country: Optional[str] = UNSET
    start_date: Optional[Date] = UNSET
    """ISO 8601 date e.g. 2018-10-17"""

    end_date: Optional[Date] = UNSET
    """ISO 8601 date e.g. 2018-10-17"""

    number_of_rooms: Optional[int] = UNSET
    class_: Optional[str] = Field(default=UNSET, alias="class")


class HotelItineraryDict(TypedDict):
    hotel_name: NotRequired[str]
    address: NotRequired[str]
    hotel_city: NotRequired[str]
    hotel_country: NotRequired[str]
    start_date: NotRequired[Date]
    end_date: NotRequired[Date]
    number_of_rooms: NotRequired[int]
    class_: NotRequired[str]
