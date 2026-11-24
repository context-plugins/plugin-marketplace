from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .media_analysis_detect_moderation_labels_config import (
    MediaAnalysisDetectModerationLabelsConfig,
    MediaAnalysisDetectModerationLabelsConfigDict,
)


class MediaAnalysisOperationsConfig(SdkBaseModel):
    detect_moderation_labels: Optional[MediaAnalysisDetectModerationLabelsConfig] = Field(
        default=UNSET, alias="DetectModerationLabels"
    )


class MediaAnalysisOperationsConfigDict(TypedDict):
    detect_moderation_labels: NotRequired[MediaAnalysisDetectModerationLabelsConfigDict]
