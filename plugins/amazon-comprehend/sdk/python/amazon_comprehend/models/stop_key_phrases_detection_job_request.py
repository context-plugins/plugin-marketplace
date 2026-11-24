from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StopKeyPhrasesDetectionJobRequest(SdkBaseModel):
    job_id: str = Field(alias="JobId")
    """The identifier of the key phrases detection job to stop."""


class StopKeyPhrasesDetectionJobRequestDict(TypedDict):
    job_id: str
