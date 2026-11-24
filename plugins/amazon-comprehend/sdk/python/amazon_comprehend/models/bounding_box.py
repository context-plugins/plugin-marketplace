from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BoundingBox(SdkBaseModel):
    height: Optional[float] = Field(default=UNSET, alias="Height")
    """The height of the bounding box as a ratio of the overall document page height."""

    left: Optional[float] = Field(default=UNSET, alias="Left")
    """The left coordinate of the bounding box as a ratio of overall document page width."""

    top: Optional[float] = Field(default=UNSET, alias="Top")
    """The top coordinate of the bounding box as a ratio of overall document page height."""

    width: Optional[float] = Field(default=UNSET, alias="Width")
    """The width of the bounding box as a ratio of the overall document page width."""


class BoundingBoxDict(TypedDict):
    height: NotRequired[float]
    left: NotRequired[float]
    top: NotRequired[float]
    width: NotRequired[float]
