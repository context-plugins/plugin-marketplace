from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GooglePlaceBase(SdkBaseModel):
    """Fields shared by the place and map entries of a Google AI answer"""

    title: str
    """Place name"""

    index: int
    """Position index of the place in the results"""

    thumbnail: Optional[str] = UNSET
    """Place thumbnail image URL"""

    rating: Optional[float] = UNSET
    """Star rating (0-5)"""

    reviews: Optional[int] = UNSET
    """Number of reviews"""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Place type or category"""

    address: Optional[str] = UNSET
    """Full postal address, as Google gives it on the card's Directions link"""

    status: Optional[str] = UNSET
    """Operating status"""

    place_id: Optional[str] = Field(default=UNSET, alias="placeId")
    """Google Knowledge Graph ID for the place. A place and its ``map`` entry share it. Omitted when Google did not
    geo-tag the card."""

    phone: Optional[str] = UNSET
    """Phone number from the card's Call button, formatted as Google ships it for the locale. Omitted when the card has
    no Call button."""

    website: Optional[str] = UNSET
    """Business website from the card's Website button. Omitted when the card has no Website button."""


class GooglePlaceBaseDict(TypedDict):
    title: str
    index: int
    thumbnail: NotRequired[str]
    rating: NotRequired[float]
    reviews: NotRequired[int]
    type_: NotRequired[str]
    address: NotRequired[str]
    status: NotRequired[str]
    place_id: NotRequired[str]
    phone: NotRequired[str]
    website: NotRequired[str]
