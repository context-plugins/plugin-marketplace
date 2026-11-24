from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HotelItem(SdkBaseModel):
    """Hotel listing with detailed information"""

    name: Optional[str] = UNSET
    """Hotel name"""

    url: Optional[str] = UNSET
    """Hotel page URL"""

    rating: Optional[float] = UNSET
    """Hotel rating (0-5)"""

    num_reviews: Optional[float] = UNSET
    """Number of reviews"""

    address: Optional[list[str]] = UNSET
    """Address lines"""

    phone: Optional[str] = UNSET
    """Phone number"""

    description: Optional[str] = UNSET
    """Hotel description"""

    image_url: Optional[str] = UNSET
    """Main hotel image URL"""

    images: Optional[list[str]] = UNSET
    """Additional hotel image URLs"""

    lat: Optional[float] = UNSET
    """Latitude"""

    lng: Optional[float] = UNSET
    """Longitude"""

    price_level: Optional[str] = UNSET
    """Price level indicator"""

    categories: Optional[list[str]] = UNSET
    """Hotel categories"""


class HotelItemDict(TypedDict):
    name: NotRequired[str]
    url: NotRequired[str]
    rating: NotRequired[float]
    num_reviews: NotRequired[float]
    address: NotRequired[list[str]]
    phone: NotRequired[str]
    description: NotRequired[str]
    image_url: NotRequired[str]
    images: NotRequired[list[str]]
    lat: NotRequired[float]
    lng: NotRequired[float]
    price_level: NotRequired[str]
    categories: NotRequired[list[str]]
