from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.strategy1 import Strategy1OrStr


class StopJobRequest(SdkBaseModel):
    """Request payload for stopping a running job"""

    job_id: int = Field(alias="jobId")
    """Unique integer identifier of the job to stop"""

    strategy: Strategy1OrStr
    """Stop strategy. SoftStop waits for the current activity to complete before stopping; Kill immediately terminates
    the robot process."""


class StopJobRequestDict(TypedDict):
    job_id: int
    strategy: Strategy1OrStr
