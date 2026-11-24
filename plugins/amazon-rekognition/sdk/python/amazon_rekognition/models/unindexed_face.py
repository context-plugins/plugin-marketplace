from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason_amazon_rekognition_face_collections_api import ReasonAmazonRekognitionFaceCollectionsApiOrStr
from .face_detail import FaceDetail, FaceDetailDict


class UnindexedFace(SdkBaseModel):
    reasons: Optional[list[ReasonAmazonRekognitionFaceCollectionsApiOrStr]] = Field(default=UNSET, alias="Reasons")
    """An array of reasons that specify why a face wasn't indexed. EXTREME_POSE - The face is at a pose that can't be
    detected. For example, the head is turned too far away from the camera. EXCEEDS_MAX_FACES - The number of faces
    detected is already higher than that specified by the MaxFaces input parameter for IndexFaces. LOW_BRIGHTNESS - The
    image is too dark. LOW_SHARPNESS - The image is too blurry. LOW_CONFIDENCE - The face was detected with a low
    confidence. SMALL_BOUNDING_BOX - The bounding box around the face is too small."""

    face_detail: Optional[FaceDetail] = Field(default=UNSET, alias="FaceDetail")


class UnindexedFaceDict(TypedDict):
    reasons: NotRequired[list[ReasonAmazonRekognitionFaceCollectionsApiOrStr]]
    face_detail: NotRequired[FaceDetailDict]
