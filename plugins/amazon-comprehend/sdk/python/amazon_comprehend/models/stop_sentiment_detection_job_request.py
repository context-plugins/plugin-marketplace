from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StopSentimentDetectionJobRequest(SdkBaseModel):
    job_id: str = Field(alias="JobId")
    """The identifier of the sentiment detection job to stop."""


class StopSentimentDetectionJobRequestDict(TypedDict):
    job_id: str
