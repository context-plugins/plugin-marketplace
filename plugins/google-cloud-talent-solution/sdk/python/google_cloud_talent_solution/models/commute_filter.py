from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.commute_method import CommuteMethodOrStr
from .enums.road_traffic import RoadTrafficOrStr
from .lat_lng2 import LatLng2, LatLng2Dict
from .time_of_day1 import TimeOfDay1, TimeOfDay1Dict


class CommuteFilter(SdkBaseModel):
    """Parameters needed for commute search."""

    travel_duration: Optional[str] = Field(default=UNSET, alias="travelDuration")
    """Required. The maximum travel time in seconds. The maximum allowed value is ``3600s`` (one hour). Format is
    ``123s``."""

    departure_time: Optional[TimeOfDay1] = Field(default=UNSET, alias="departureTime")
    """The departure time used to calculate traffic impact, represented as google.type.TimeOfDay in local time zone.
    Currently traffic model is restricted to hour level resolution."""

    allow_imprecise_addresses: Optional[bool] = Field(default=UNSET, alias="allowImpreciseAddresses")
    """If ``true``, jobs without street level addresses may also be returned. For city level addresses, the city center
    is used. For state and coarser level addresses, text matching is used. If this field is set to ``false`` or isn't
    specified, only jobs that include street level addresses will be returned by commute search."""

    commute_method: Optional[CommuteMethodOrStr] = Field(default=UNSET, alias="commuteMethod")
    """Required. The method of transportation to calculate the commute time for."""

    start_coordinates: Optional[LatLng2] = Field(default=UNSET, alias="startCoordinates")
    """Required. The latitude and longitude of the location to calculate the commute time from."""

    road_traffic: Optional[RoadTrafficOrStr] = Field(default=UNSET, alias="roadTraffic")
    """Specifies the traffic density to use when calculating commute time."""


class CommuteFilterDict(TypedDict):
    travel_duration: NotRequired[str]
    departure_time: NotRequired[TimeOfDay1Dict]
    allow_imprecise_addresses: NotRequired[bool]
    commute_method: NotRequired[CommuteMethodOrStr]
    start_coordinates: NotRequired[LatLng2Dict]
    road_traffic: NotRequired[RoadTrafficOrStr]
