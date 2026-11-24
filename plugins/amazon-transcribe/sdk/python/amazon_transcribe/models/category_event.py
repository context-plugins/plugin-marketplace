from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .points_of_interest import PointsOfInterest, PointsOfInterestDict


class CategoryEvent(SdkBaseModel):
    matched_categories: Optional[list[str]] = Field(default=UNSET, alias="MatchedCategories")
    """Lists the categories that were matched in your audio segment."""

    matched_details: Optional[dict[str, PointsOfInterest]] = Field(default=UNSET, alias="MatchedDetails")
    """Contains information about the matched categories, including category names and timestamps."""


class CategoryEventDict(TypedDict):
    matched_categories: NotRequired[list[str]]
    matched_details: NotRequired[dict[str, PointsOfInterestDict]]
