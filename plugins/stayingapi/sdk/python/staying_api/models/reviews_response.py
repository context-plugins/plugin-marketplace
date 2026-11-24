from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .meta import Meta, MetaDict
from .review import Review, ReviewDict


class ReviewsResponse(SdkBaseModel):
    data: list[Review]
    """Endpoint-specific data payload."""

    meta: Meta
    """Canonical response metadata present on every 200 (§6.3.3)."""


class ReviewsResponseDict(TypedDict):
    data: list[ReviewDict]
    meta: MetaDict
