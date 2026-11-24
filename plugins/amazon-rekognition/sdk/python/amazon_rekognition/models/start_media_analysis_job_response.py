from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StartMediaAnalysisJobResponse(SdkBaseModel):
    job_id: str = Field(alias="JobId")
    """Identifier for the created job."""


class StartMediaAnalysisJobResponseDict(TypedDict):
    job_id: str
