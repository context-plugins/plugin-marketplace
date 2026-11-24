from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .geometry import Geometry, GeometryDict


class CustomLabel(SdkBaseModel):
    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of the custom label."""

    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """The confidence that the model has in the detection of the custom label. The range is 0-100. A higher value
    indicates a higher confidence."""

    geometry: Optional[Geometry] = Field(default=UNSET, alias="Geometry")


class CustomLabelDict(TypedDict):
    name: NotRequired[str]
    confidence: NotRequired[float]
    geometry: NotRequired[GeometryDict]
