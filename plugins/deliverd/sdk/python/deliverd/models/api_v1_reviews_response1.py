from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .review import Review, ReviewDict


class ApiV1ReviewsResponse1(SdkBaseModel):
    reviews: list[Review]
    next_cursor: str | None = Field(alias="nextCursor")
    """Pass back as ?cursor= for the next page. Null means this is the end."""


class ApiV1ReviewsResponse1Dict(TypedDict):
    reviews: list[ReviewDict]
    next_cursor: str | None
