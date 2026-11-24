from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_amazon_transcribe_service_medical_scribe_job_api import (
    StatusAmazonTranscribeServiceMedicalScribeJobApiOrStr,
)


class ListMedicalScribeJobsRequest(SdkBaseModel):
    status: Optional[StatusAmazonTranscribeServiceMedicalScribeJobApiOrStr] = Field(default=UNSET, alias="Status")
    """Returns only Medical Scribe jobs with the specified status. Jobs are ordered by creation date, with the newest
    job first. If you do not include Status, all Medical Scribe jobs are returned."""

    job_name_contains: Optional[str] = Field(default=UNSET, alias="JobNameContains")
    """Returns only the Medical Scribe jobs that contain the specified string. The search is not case sensitive."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If your ListMedicalScribeJobs request returns more results than can be displayed, NextToken is displayed in the
    response with an associated string. To get the next page of results, copy this string and repeat your request,
    including NextToken with the value of the copied string. Repeat as needed to view all your results."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The maximum number of Medical Scribe jobs to return in each page of results. If there are fewer results than the
    value that you specify, only the actual results are returned. If you do not specify a value, a default of 5 is
    used."""


class ListMedicalScribeJobsRequestDict(TypedDict):
    status: NotRequired[StatusAmazonTranscribeServiceMedicalScribeJobApiOrStr]
    job_name_contains: NotRequired[str]
    next_token: NotRequired[str]
    max_results: NotRequired[int]
