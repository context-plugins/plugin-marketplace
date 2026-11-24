from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sentiment_detection_job_properties import SentimentDetectionJobProperties, SentimentDetectionJobPropertiesDict


class ListSentimentDetectionJobsResponse(SdkBaseModel):
    sentiment_detection_job_properties_list: Optional[list[SentimentDetectionJobProperties]] = Field(
        default=UNSET, alias="SentimentDetectionJobPropertiesList"
    )
    """A list containing the properties of each job that is returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Identifies the next page of results to return."""


class ListSentimentDetectionJobsResponseDict(TypedDict):
    sentiment_detection_job_properties_list: NotRequired[list[SentimentDetectionJobPropertiesDict]]
    next_token: NotRequired[str]
