from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StopDominantLanguageDetectionJobRequest(SdkBaseModel):
    job_id: str = Field(alias="JobId")
    """The identifier of the dominant language detection job to stop."""


class StopDominantLanguageDetectionJobRequestDict(TypedDict):
    job_id: str
