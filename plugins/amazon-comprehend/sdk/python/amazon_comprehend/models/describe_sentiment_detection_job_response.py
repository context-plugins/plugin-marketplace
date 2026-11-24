from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sentiment_detection_job_properties import SentimentDetectionJobProperties, SentimentDetectionJobPropertiesDict


class DescribeSentimentDetectionJobResponse(SdkBaseModel):
    sentiment_detection_job_properties: Optional[SentimentDetectionJobProperties] = Field(
        default=UNSET, alias="SentimentDetectionJobProperties"
    )


class DescribeSentimentDetectionJobResponseDict(TypedDict):
    sentiment_detection_job_properties: NotRequired[SentimentDetectionJobPropertiesDict]
