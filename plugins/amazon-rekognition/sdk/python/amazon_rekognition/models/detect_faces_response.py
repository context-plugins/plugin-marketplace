from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.orientation_correction_amazon_rekognition_facial_analysis_api import (
    OrientationCorrectionAmazonRekognitionFacialAnalysisApiOrStr,
)
from .face_detail import FaceDetail, FaceDetailDict


class DetectFacesResponse(SdkBaseModel):
    face_details: Optional[list[FaceDetail]] = Field(default=UNSET, alias="FaceDetails")
    """Details of each face found in the image."""

    orientation_correction: Optional[OrientationCorrectionAmazonRekognitionFacialAnalysisApiOrStr] = Field(
        default=UNSET, alias="OrientationCorrection"
    )
    """The value of OrientationCorrection is always null. If the input image is in .jpeg format, it might contain
    exchangeable image file format (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this
    orientation information to perform image correction. The bounding box coordinates are translated to represent object
    locations after the orientation information in the Exif metadata is used to correct the image orientation. Images in
    .png format don't contain Exif metadata. Amazon Rekognition doesn’t perform image correction for images in .png
    format and .jpeg images without"""


class DetectFacesResponseDict(TypedDict):
    face_details: NotRequired[list[FaceDetailDict]]
    orientation_correction: NotRequired[OrientationCorrectionAmazonRekognitionFacialAnalysisApiOrStr]
