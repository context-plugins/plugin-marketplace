from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .topics_detection_job_properties import TopicsDetectionJobProperties, TopicsDetectionJobPropertiesDict


class DescribeTopicsDetectionJobResponse(SdkBaseModel):
    topics_detection_job_properties: Optional[TopicsDetectionJobProperties] = Field(
        default=UNSET, alias="TopicsDetectionJobProperties"
    )


class DescribeTopicsDetectionJobResponseDict(TypedDict):
    topics_detection_job_properties: NotRequired[TopicsDetectionJobPropertiesDict]
