from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type4 import Type4OrStr
from .geometry import Geometry, GeometryDict


class TextDetection(SdkBaseModel):
    detected_text: Optional[str] = Field(default=UNSET, alias="DetectedText")
    """The word or line of text recognized by Amazon Rekognition."""

    type_: Optional[Type4OrStr] = Field(default=UNSET, alias="Type")
    """The type of text that was detected."""

    id: Optional[int] = Field(default=UNSET, alias="Id")
    """The identifier for the detected text. The identifier is only unique for a single call to DetectText."""

    parent_id: Optional[int] = Field(default=UNSET, alias="ParentId")
    """The Parent identifier for the detected text identified by the value of ID. If the type of detected text is LINE,
    the value of ParentId is Null."""

    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """The confidence that Amazon Rekognition has in the accuracy of the detected text and the accuracy of the geometry
    points around the detected text."""

    geometry: Optional[Geometry] = Field(default=UNSET, alias="Geometry")


class TextDetectionDict(TypedDict):
    detected_text: NotRequired[str]
    type_: NotRequired[Type4OrStr]
    id: NotRequired[int]
    parent_id: NotRequired[int]
    confidence: NotRequired[float]
    geometry: NotRequired[GeometryDict]
