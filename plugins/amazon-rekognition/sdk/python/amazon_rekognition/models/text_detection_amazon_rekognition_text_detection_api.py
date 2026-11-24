from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_amazon_rekognition_text_detection_api import TypeAmazonRekognitionTextDetectionApiOrStr
from .geometry import Geometry, GeometryDict


class TextDetectionAmazonRekognitionTextDetectionApi(SdkBaseModel):
    detected_text: Optional[str] = Field(default=UNSET, alias="DetectedText")
    """The word or line of text recognized by Amazon Rekognition."""

    type_: Optional[TypeAmazonRekognitionTextDetectionApiOrStr] = Field(default=UNSET, alias="Type")
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


class TextDetectionAmazonRekognitionTextDetectionApiDict(TypedDict):
    detected_text: NotRequired[str]
    type_: NotRequired[TypeAmazonRekognitionTextDetectionApiOrStr]
    id: NotRequired[int]
    parent_id: NotRequired[int]
    confidence: NotRequired[float]
    geometry: NotRequired[GeometryDict]
