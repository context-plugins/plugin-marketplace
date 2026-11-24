from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_amazon_rekognition_face_collections_api import TypeAmazonRekognitionFaceCollectionsApiOrStr


class EmotionAmazonRekognitionFaceCollectionsApi(SdkBaseModel):
    type_: Optional[TypeAmazonRekognitionFaceCollectionsApiOrStr] = Field(default=UNSET, alias="Type")
    """Type of emotion detected."""

    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """Level of confidence in the determination."""


class EmotionAmazonRekognitionFaceCollectionsApiDict(TypedDict):
    type_: NotRequired[TypeAmazonRekognitionFaceCollectionsApiOrStr]
    confidence: NotRequired[float]
