from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeDominantLanguageDetectionJobRequest(SdkBaseModel):
    job_id: str = Field(alias="JobId")
    """The identifier that Amazon Comprehend generated for the job. The StartDominantLanguageDetectionJob operation
    returns this identifier in its response."""


class DescribeDominantLanguageDetectionJobRequestDict(TypedDict):
    job_id: str
