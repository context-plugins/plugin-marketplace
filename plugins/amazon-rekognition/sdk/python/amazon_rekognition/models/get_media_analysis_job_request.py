from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GetMediaAnalysisJobRequest(SdkBaseModel):
    job_id: str = Field(alias="JobId")
    """Unique identifier for the media analysis job for which you want to retrieve results."""


class GetMediaAnalysisJobRequestDict(TypedDict):
    job_id: str
