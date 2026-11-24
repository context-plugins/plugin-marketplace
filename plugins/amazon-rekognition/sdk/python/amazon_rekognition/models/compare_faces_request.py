from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.quality_filter_amazon_rekognition_facial_analysis_api import (
    QualityFilterAmazonRekognitionFacialAnalysisApiOrStr,
)
from .image import Image, ImageDict


class CompareFacesRequest(SdkBaseModel):
    source_image: Image = Field(alias="SourceImage")
    target_image: Image = Field(alias="TargetImage")
    similarity_threshold: Optional[float] = Field(default=UNSET, alias="SimilarityThreshold")
    """The minimum level of confidence in the face matches that a match must meet to be included in the FaceMatches
    array."""

    quality_filter: Optional[QualityFilterAmazonRekognitionFacialAnalysisApiOrStr] = Field(
        default=UNSET, alias="QualityFilter"
    )
    """A filter that specifies a quality bar for how much filtering is done to identify faces. Filtered faces aren't
    compared. If you specify AUTO, Amazon Rekognition chooses the quality bar. If you specify LOW, MEDIUM, or HIGH,
    filtering removes all faces that don’t meet the chosen quality bar. The quality bar is based on a variety of common
    use cases. Low-quality detections can occur for a number of reasons. Some examples are an object that's
    misidentified as a face, a face that's too blurry, or a face with a pose that's too extreme to use. If you specify
    NONE, no filtering is performed. The defaul"""


class CompareFacesRequestDict(TypedDict):
    source_image: ImageDict
    target_image: ImageDict
    similarity_threshold: NotRequired[float]
    quality_filter: NotRequired[QualityFilterAmazonRekognitionFacialAnalysisApiOrStr]
