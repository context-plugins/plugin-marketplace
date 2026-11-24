from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StopEntitiesDetectionJobRequest(SdkBaseModel):
    job_id: str = Field(alias="JobId")
    """The identifier of the entities detection job to stop."""


class StopEntitiesDetectionJobRequestDict(TypedDict):
    job_id: str
