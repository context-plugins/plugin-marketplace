from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Itinerary(SdkBaseModel):
    departure_city: Optional[str] = UNSET
    departure_country: Optional[str] = UNSET
    arrival_city: Optional[str] = UNSET
    arrival_country: Optional[str] = UNSET
    carrier: Optional[str] = UNSET
    departure_date: Optional[RFC3339DateTime] = UNSET
    """RFC3339 e.g. 2018-10-17T07:26:33Z"""

    class_: Optional[str] = Field(default=UNSET, alias="class")
    refundable: Optional[bool] = UNSET
    """true - if ticket can be cancelled/refunded"""


class ItineraryDict(TypedDict):
    departure_city: NotRequired[str]
    departure_country: NotRequired[str]
    arrival_city: NotRequired[str]
    arrival_country: NotRequired[str]
    carrier: NotRequired[str]
    departure_date: NotRequired[RFC3339DateTime]
    class_: NotRequired[str]
    refundable: NotRequired[bool]
