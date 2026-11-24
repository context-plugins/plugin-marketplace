from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.platform import PlatformOrStr


class Review(SdkBaseModel):
    platform: PlatformOrStr
    listing_id: str = Field(alias="listingId")
    review_id: str = Field(alias="reviewId")
    rating: float
    rating_scale: float = Field(alias="ratingScale")
    title: str
    text: str
    author: str
    date: str
    trip_type: str = Field(alias="tripType")
    language: str
    owner_response: str = Field(alias="ownerResponse")
    liked: str
    disliked: str


class ReviewDict(TypedDict):
    platform: PlatformOrStr
    listing_id: str
    review_id: str
    rating: float
    rating_scale: float
    title: str
    text: str
    author: str
    date: str
    trip_type: str
    language: str
    owner_response: str
    liked: str
    disliked: str
