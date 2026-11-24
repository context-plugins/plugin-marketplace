from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Point(SdkBaseModel):
    x: Optional[float] = Field(default=UNSET, alias="X")
    """The value of the X coordinate for a point on a Polygon."""

    y: Optional[float] = Field(default=UNSET, alias="Y")
    """The value of the Y coordinate for a point on a Polygon."""


class PointDict(TypedDict):
    x: NotRequired[float]
    y: NotRequired[float]
