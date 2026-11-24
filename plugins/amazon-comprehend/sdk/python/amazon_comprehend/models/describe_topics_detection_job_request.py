from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeTopicsDetectionJobRequest(SdkBaseModel):
    job_id: str = Field(alias="JobId")
    """The identifier assigned by the user to the detection job."""


class DescribeTopicsDetectionJobRequestDict(TypedDict):
    job_id: str
