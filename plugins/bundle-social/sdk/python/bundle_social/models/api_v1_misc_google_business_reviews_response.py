from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .review import Review, ReviewDict


class ApiV1MiscGoogleBusinessReviewsResponse(SdkBaseModel):
    reviews: list[Review]
    total: float
    limit: float
    remaining_capacity: float = Field(alias="remainingCapacity")


class ApiV1MiscGoogleBusinessReviewsResponseDict(TypedDict):
    reviews: list[ReviewDict]
    total: float
    limit: float
    remaining_capacity: float
