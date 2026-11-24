from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .media_analysis_job_description import MediaAnalysisJobDescription, MediaAnalysisJobDescriptionDict


class ListMediaAnalysisJobsResponse(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Pagination token, if the previous response was incomplete."""

    media_analysis_jobs: list[MediaAnalysisJobDescription] = Field(alias="MediaAnalysisJobs")
    """Contains a list of all media analysis jobs."""


class ListMediaAnalysisJobsResponseDict(TypedDict):
    next_token: NotRequired[str]
    media_analysis_jobs: list[MediaAnalysisJobDescriptionDict]
