from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Rating(SdkBaseModel):
    """Product rating information"""

    value: Optional[float] = UNSET
    """Rating value"""

    count: Optional[int] = UNSET
    """Number of ratings"""

    max_rating: OptionalNullable[float] = Field(default=UNSET, alias="maxRating")
    """Maximum rating scale. May be null or absent."""


class RatingDict(TypedDict):
    value: NotRequired[float]
    count: NotRequired[int]
    max_rating: NotRequired[float | None]
