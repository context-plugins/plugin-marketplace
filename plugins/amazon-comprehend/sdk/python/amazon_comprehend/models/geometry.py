from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bounding_box import BoundingBox, BoundingBoxDict
from .point import Point, PointDict


class Geometry(SdkBaseModel):
    bounding_box: Optional[BoundingBox] = Field(default=UNSET, alias="BoundingBox")
    polygon: Optional[list[Point]] = Field(default=UNSET, alias="Polygon")
    """Within the bounding box, a fine-grained polygon around the recognized item."""


class GeometryDict(TypedDict):
    bounding_box: NotRequired[BoundingBoxDict]
    polygon: NotRequired[list[PointDict]]
