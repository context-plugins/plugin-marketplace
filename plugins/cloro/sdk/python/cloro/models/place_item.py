from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PlaceItem(SdkBaseModel):
    """General place or location information"""

    name: Optional[str] = UNSET
    """Place name"""

    url: Optional[str] = UNSET
    """Place page URL"""

    rating: Optional[float] = UNSET
    """Place rating (0-5)"""

    address: Optional[list[str]] = UNSET
    """Address lines"""

    lat: Optional[float] = UNSET
    """Latitude"""

    lng: Optional[float] = UNSET
    """Longitude"""

    categories: Optional[list[str]] = UNSET
    """Place categories"""

    map_url: Optional[str] = UNSET
    """Map URL"""

    images: Optional[list[str]] = UNSET
    """Place image URLs"""


class PlaceItemDict(TypedDict):
    name: NotRequired[str]
    url: NotRequired[str]
    rating: NotRequired[float]
    address: NotRequired[list[str]]
    lat: NotRequired[float]
    lng: NotRequired[float]
    categories: NotRequired[list[str]]
    map_url: NotRequired[str]
    images: NotRequired[list[str]]
