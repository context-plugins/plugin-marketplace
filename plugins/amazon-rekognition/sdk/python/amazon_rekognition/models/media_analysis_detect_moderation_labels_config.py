from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MediaAnalysisDetectModerationLabelsConfig(SdkBaseModel):
    min_confidence: Optional[float] = Field(default=UNSET, alias="MinConfidence")
    """Specifies the minimum confidence level for the moderation labels to return. Amazon Rekognition doesn't return any
    labels with a confidence level lower than this specified value."""

    project_version: Optional[str] = Field(default=UNSET, alias="ProjectVersion")
    """Specifies the custom moderation model to be used during the label detection job. If not provided the pre-trained
    model is used."""


class MediaAnalysisDetectModerationLabelsConfigDict(TypedDict):
    min_confidence: NotRequired[float]
    project_version: NotRequired[str]
