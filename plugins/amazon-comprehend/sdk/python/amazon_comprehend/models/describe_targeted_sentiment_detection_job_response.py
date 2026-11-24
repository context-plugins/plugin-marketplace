from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .targeted_sentiment_detection_job_properties import (
    TargetedSentimentDetectionJobProperties,
    TargetedSentimentDetectionJobPropertiesDict,
)


class DescribeTargetedSentimentDetectionJobResponse(SdkBaseModel):
    targeted_sentiment_detection_job_properties: Optional[TargetedSentimentDetectionJobProperties] = Field(
        default=UNSET, alias="TargetedSentimentDetectionJobProperties"
    )


class DescribeTargetedSentimentDetectionJobResponseDict(TypedDict):
    targeted_sentiment_detection_job_properties: NotRequired[TargetedSentimentDetectionJobPropertiesDict]
