from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StopTargetedSentimentDetectionJobRequest(SdkBaseModel):
    job_id: str = Field(alias="JobId")
    """The identifier of the targeted sentiment detection job to stop."""


class StopTargetedSentimentDetectionJobRequestDict(TypedDict):
    job_id: str
