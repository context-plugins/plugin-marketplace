from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeTargetedSentimentDetectionJobRequest(SdkBaseModel):
    job_id: str = Field(alias="JobId")
    """The identifier that Amazon Comprehend generated for the job. The StartTargetedSentimentDetectionJob operation
    returns this identifier in its response."""


class DescribeTargetedSentimentDetectionJobRequestDict(TypedDict):
    job_id: str
