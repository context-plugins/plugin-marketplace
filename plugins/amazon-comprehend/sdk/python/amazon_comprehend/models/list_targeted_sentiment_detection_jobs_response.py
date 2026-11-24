from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .targeted_sentiment_detection_job_properties import (
    TargetedSentimentDetectionJobProperties,
    TargetedSentimentDetectionJobPropertiesDict,
)


class ListTargetedSentimentDetectionJobsResponse(SdkBaseModel):
    targeted_sentiment_detection_job_properties_list: Optional[list[TargetedSentimentDetectionJobProperties]] = Field(
        default=UNSET, alias="TargetedSentimentDetectionJobPropertiesList"
    )
    """A list containing the properties of each job that is returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Identifies the next page of results to return."""


class ListTargetedSentimentDetectionJobsResponseDict(TypedDict):
    targeted_sentiment_detection_job_properties_list: NotRequired[list[TargetedSentimentDetectionJobPropertiesDict]]
    next_token: NotRequired[str]
