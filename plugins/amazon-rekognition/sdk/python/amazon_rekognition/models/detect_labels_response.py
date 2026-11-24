from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .detect_labels_image_properties import DetectLabelsImageProperties, DetectLabelsImagePropertiesDict
from .enums.orientation_correction_amazon_rekognition_facial_analysis_api import (
    OrientationCorrectionAmazonRekognitionFacialAnalysisApiOrStr,
)
from .label import Label, LabelDict


class DetectLabelsResponse(SdkBaseModel):
    labels: Optional[list[Label]] = Field(default=UNSET, alias="Labels")
    """An array of labels for the real-world objects detected."""

    orientation_correction: Optional[OrientationCorrectionAmazonRekognitionFacialAnalysisApiOrStr] = Field(
        default=UNSET, alias="OrientationCorrection"
    )
    """The value of OrientationCorrection is always null. If the input image is in .jpeg format, it might contain
    exchangeable image file format (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this
    orientation information to perform image correction. The bounding box coordinates are translated to represent object
    locations after the orientation information in the Exif metadata is used to correct the image orientation. Images in
    .png format don't contain Exif metadata. Amazon Rekognition doesn’t perform image correction for images in .png
    format and .jpeg images without"""

    label_model_version: Optional[str] = Field(default=UNSET, alias="LabelModelVersion")
    """Version number of the label detection model that was used to detect labels."""

    image_properties: Optional[DetectLabelsImageProperties] = Field(default=UNSET, alias="ImageProperties")


class DetectLabelsResponseDict(TypedDict):
    labels: NotRequired[list[LabelDict]]
    orientation_correction: NotRequired[OrientationCorrectionAmazonRekognitionFacialAnalysisApiOrStr]
    label_model_version: NotRequired[str]
    image_properties: NotRequired[DetectLabelsImagePropertiesDict]
