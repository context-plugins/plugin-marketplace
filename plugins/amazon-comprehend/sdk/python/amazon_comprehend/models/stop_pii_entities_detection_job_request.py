from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StopPiiEntitiesDetectionJobRequest(SdkBaseModel):
    job_id: str = Field(alias="JobId")
    """The identifier of the PII entities detection job to stop."""


class StopPiiEntitiesDetectionJobRequestDict(TypedDict):
    job_id: str
