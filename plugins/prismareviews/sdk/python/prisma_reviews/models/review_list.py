from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .review import Review, ReviewDict


class ReviewList(SdkBaseModel):
    """A page of reviews."""

    data: list[Review]
    next_cursor: str | None
    """Pass it as ``cursor``, with the same filters, for the next page. ``null`` on the last page."""


class ReviewListDict(TypedDict):
    data: list[ReviewDict]
    next_cursor: str | None
