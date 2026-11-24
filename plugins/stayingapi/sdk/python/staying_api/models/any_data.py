from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.amenity import AmenityOrStr
from .enums.platform import PlatformOrStr
from .enums.property_type import PropertyTypeOrStr
from .host import Host, HostDict
from .identity import Identity, IdentityDict
from .location import Location, LocationDict
from .price import Price, PriceDict


class AnyData(SdkBaseModel):
    """Endpoint-specific data payload."""

    id: str
    platform: PlatformOrStr
    platform_listing_id: str = Field(alias="platformListingId")
    url: str
    name: str
    property_type: PropertyTypeOrStr = Field(alias="propertyType")
    location: Location
    star_rating: float = Field(alias="starRating")
    guest_rating: float = Field(alias="guestRating")
    rating_scale: float = Field(alias="ratingScale")
    review_count: int = Field(alias="reviewCount")
    max_occupancy: int = Field(alias="maxOccupancy")
    bedrooms: float
    bathrooms: float
    amenities: list[AmenityOrStr]
    images: list[str]
    host: Host
    price: Optional[Price] = UNSET
    identity: Optional[Identity] = UNSET


class AnyDataDict(TypedDict):
    id: str
    platform: PlatformOrStr
    platform_listing_id: str
    url: str
    name: str
    property_type: PropertyTypeOrStr
    location: LocationDict
    star_rating: float
    guest_rating: float
    rating_scale: float
    review_count: int
    max_occupancy: int
    bedrooms: float
    bathrooms: float
    amenities: list[AmenityOrStr]
    images: list[str]
    host: HostDict
    price: NotRequired[PriceDict]
    identity: NotRequired[IdentityDict]
