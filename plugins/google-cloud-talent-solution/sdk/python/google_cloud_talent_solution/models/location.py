from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.location_type import LocationTypeOrStr
from .lat_lng4 import LatLng4, LatLng4Dict
from .postal_address2 import PostalAddress2, PostalAddress2Dict


class Location(SdkBaseModel):
    """A resource that represents a location with full geographic information."""

    radius_miles: Optional[float] = Field(default=UNSET, alias="radiusMiles")
    """Radius in miles of the job location. This value is derived from the location bounding box in which a circle with
    the specified radius centered from google.type.LatLng covers the area associated with the job location. For example,
    currently, "Mountain View, CA, USA" has a radius of 6.17 miles."""

    location_type: Optional[LocationTypeOrStr] = Field(default=UNSET, alias="locationType")
    """The type of a location, which corresponds to the address lines field of google.type.PostalAddress. For example,
    "Downtown, Atlanta, GA, USA" has a type of LocationType.NEIGHBORHOOD, and "Kansas City, KS, USA" has a type of
    LocationType.LOCALITY."""

    postal_address: Optional[PostalAddress2] = Field(default=UNSET, alias="postalAddress")
    """Postal address of the location that includes human readable information, such as postal delivery and payments
    addresses. Given a postal address, a postal service can deliver items to a premises, P.O. Box, or other delivery
    location."""

    lat_lng: Optional[LatLng4] = Field(default=UNSET, alias="latLng")
    """An object representing a latitude/longitude pair."""


class LocationDict(TypedDict):
    radius_miles: NotRequired[float]
    location_type: NotRequired[LocationTypeOrStr]
    postal_address: NotRequired[PostalAddress2Dict]
    lat_lng: NotRequired[LatLng4Dict]
