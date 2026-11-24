from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1_amazon_transcribe_service_medical_scribe_job_api import (
    Status1AmazonTranscribeServiceMedicalScribeJobApiOrStr,
)
from .medical_scribe_job_summary import MedicalScribeJobSummary, MedicalScribeJobSummaryDict


class ListMedicalScribeJobsResponse(SdkBaseModel):
    status: Optional[Status1AmazonTranscribeServiceMedicalScribeJobApiOrStr] = Field(default=UNSET, alias="Status")
    """Lists all Medical Scribe jobs that have the status specified in your request. Jobs are ordered by creation date,
    with the newest job first."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If NextToken is present in your response, it indicates that not all results are displayed. To view the next set
    of results, copy the string associated with the NextToken parameter in your results output, then run your request
    again including NextToken with the value of the copied string. Repeat as needed to view all your results."""

    medical_scribe_job_summaries: Optional[list[MedicalScribeJobSummary]] = Field(
        default=UNSET, alias="MedicalScribeJobSummaries"
    )
    """Provides a summary of information about each result."""


class ListMedicalScribeJobsResponseDict(TypedDict):
    status: NotRequired[Status1AmazonTranscribeServiceMedicalScribeJobApiOrStr]
    next_token: NotRequired[str]
    medical_scribe_job_summaries: NotRequired[list[MedicalScribeJobSummaryDict]]
