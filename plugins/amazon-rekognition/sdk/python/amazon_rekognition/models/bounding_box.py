from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BoundingBox(SdkBaseModel):
    width: Optional[float] = Field(default=UNSET, alias="Width")
    """Width of the bounding box as a ratio of the overall image width."""

    height: Optional[float] = Field(default=UNSET, alias="Height")
    """Height of the bounding box as a ratio of the overall image height."""

    left: Optional[float] = Field(default=UNSET, alias="Left")
    """Left coordinate of the bounding box as a ratio of overall image width."""

    top: Optional[float] = Field(default=UNSET, alias="Top")
    """Top coordinate of the bounding box as a ratio of overall image height."""


class BoundingBoxDict(TypedDict):
    width: NotRequired[float]
    height: NotRequired[float]
    left: NotRequired[float]
    top: NotRequired[float]
