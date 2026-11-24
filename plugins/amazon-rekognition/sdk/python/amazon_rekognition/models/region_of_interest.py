from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bounding_box import BoundingBox, BoundingBoxDict
from .point import Point, PointDict


class RegionOfInterest(SdkBaseModel):
    bounding_box: Optional[BoundingBox] = Field(default=UNSET, alias="BoundingBox")
    polygon: Optional[list[Point]] = Field(default=UNSET, alias="Polygon")
    """Specifies a shape made up of up to 10 Point objects to define a region of interest."""


class RegionOfInterestDict(TypedDict):
    bounding_box: NotRequired[BoundingBoxDict]
    polygon: NotRequired[list[PointDict]]
