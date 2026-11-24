from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .detection_filter import DetectionFilter, DetectionFilterDict
from .region_of_interest import RegionOfInterest, RegionOfInterestDict


class DetectTextFilters(SdkBaseModel):
    word_filter: Optional[DetectionFilter] = Field(default=UNSET, alias="WordFilter")
    regions_of_interest: Optional[list[RegionOfInterest]] = Field(default=UNSET, alias="RegionsOfInterest")
    """A Filter focusing on a certain area of the image. Uses a BoundingBox object to set the region of the image."""


class DetectTextFiltersDict(TypedDict):
    word_filter: NotRequired[DetectionFilterDict]
    regions_of_interest: NotRequired[list[RegionOfInterestDict]]
