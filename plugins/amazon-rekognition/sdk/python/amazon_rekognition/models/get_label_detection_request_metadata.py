from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.aggregate_by1_amazon_rekognition_stored_video_analysis_api import (
    AggregateBy1AmazonRekognitionStoredVideoAnalysisApiOrStr,
)
from .enums.sort_by1_amazon_rekognition_stored_video_analysis_api import (
    SortBy1AmazonRekognitionStoredVideoAnalysisApiOrStr,
)


class GetLabelDetectionRequestMetadata(SdkBaseModel):
    sort_by: Optional[SortBy1AmazonRekognitionStoredVideoAnalysisApiOrStr] = Field(default=UNSET, alias="SortBy")
    """The sorting method chosen for a GetLabelDetection request."""

    aggregate_by: Optional[AggregateBy1AmazonRekognitionStoredVideoAnalysisApiOrStr] = Field(
        default=UNSET, alias="AggregateBy"
    )
    """The aggregation method chosen for a GetLabelDetection request."""


class GetLabelDetectionRequestMetadataDict(TypedDict):
    sort_by: NotRequired[SortBy1AmazonRekognitionStoredVideoAnalysisApiOrStr]
    aggregate_by: NotRequired[AggregateBy1AmazonRekognitionStoredVideoAnalysisApiOrStr]
