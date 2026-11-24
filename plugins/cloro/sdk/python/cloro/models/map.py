from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .location import Location, LocationDict
from .photo import Photo, PhotoDict
from .review import Review, ReviewDict


class Map(SdkBaseModel):
    name: Optional[str] = UNSET
    """Business name"""

    position: Optional[int] = UNSET
    """Position in results (1-indexed)"""

    place_id: Optional[str] = Field(default=UNSET, alias="placeId")
    """Google Place ID"""

    location: Optional[Location] = UNSET
    """Business location"""

    phone_number: Optional[str] = Field(default=UNSET, alias="phoneNumber")
    """Contact phone number"""

    url: Optional[str] = UNSET
    """Business website URL"""

    reviews: Optional[list[Review]] = UNSET
    """Review aggregations from providers"""

    photos: Optional[list[Photo]] = UNSET
    """Business photos"""

    open_state: Optional[str] = Field(default=UNSET, alias="openState")
    """Current open/closed status"""

    category: Optional[str] = UNSET
    """Business category"""

    price: Optional[Any] = UNSET
    """Price level (if available)"""

    layer_label: Optional[str] = Field(default=UNSET, alias="layerLabel")
    """Map layer grouping label"""


class MapDict(TypedDict):
    name: NotRequired[str]
    position: NotRequired[int]
    place_id: NotRequired[str]
    location: NotRequired[LocationDict]
    phone_number: NotRequired[str]
    url: NotRequired[str]
    reviews: NotRequired[list[ReviewDict]]
    photos: NotRequired[list[PhotoDict]]
    open_state: NotRequired[str]
    category: NotRequired[str]
    price: NotRequired[Any]
    layer_label: NotRequired[str]
