from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason_amazon_rekognition_user_api import ReasonAmazonRekognitionUserApiOrStr
from .face_detail import FaceDetail, FaceDetailDict


class UnsearchedFace(SdkBaseModel):
    face_details: Optional[FaceDetail] = Field(default=UNSET, alias="FaceDetails")
    reasons: Optional[list[ReasonAmazonRekognitionUserApiOrStr]] = Field(default=UNSET, alias="Reasons")
    """Reasons why a face wasn't used for Search."""


class UnsearchedFaceDict(TypedDict):
    face_details: NotRequired[FaceDetailDict]
    reasons: NotRequired[list[ReasonAmazonRekognitionUserApiOrStr]]
