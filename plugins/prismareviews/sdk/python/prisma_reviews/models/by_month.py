from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ByMonth(SdkBaseModel):
    month: str
    """``YYYY-MM``."""

    reviews: int
    average_rating: float | None
    replied: int


class ByMonthDict(TypedDict):
    month: str
    reviews: int
    average_rating: float | None
    replied: int
