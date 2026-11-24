from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StopEventsDetectionJobRequest(SdkBaseModel):
    job_id: str = Field(alias="JobId")
    """The identifier of the events detection job to stop."""


class StopEventsDetectionJobRequestDict(TypedDict):
    job_id: str
