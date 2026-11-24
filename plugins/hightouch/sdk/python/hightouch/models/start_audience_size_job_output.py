from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StartAudienceSizeJobOutput(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    job_id: str = Field(alias="jobId")


class StartAudienceSizeJobOutputDict(TypedDict):
    job_id: str
