from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_amazon_transcribe_service_transcription_jobs_api import (
    StatusAmazonTranscribeServiceTranscriptionJobsApiOrStr,
)


class ListTranscriptionJobsRequest(SdkBaseModel):
    status: Optional[StatusAmazonTranscribeServiceTranscriptionJobsApiOrStr] = Field(default=UNSET, alias="Status")
    """Returns only transcription jobs with the specified status. Jobs are ordered by creation date, with the newest job
    first. If you do not include Status, all transcription jobs are returned."""

    job_name_contains: Optional[str] = Field(default=UNSET, alias="JobNameContains")
    """Returns only the transcription jobs that contain the specified string. The search is not case sensitive."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If your ListTranscriptionJobs request returns more results than can be displayed, NextToken is displayed in the
    response with an associated string. To get the next page of results, copy this string and repeat your request,
    including NextToken with the value of the copied string. Repeat as needed to view all your results."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The maximum number of transcription jobs to return in each page of results. If there are fewer results than the
    value that you specify, only the actual results are returned. If you do not specify a value, a default of 5 is
    used."""


class ListTranscriptionJobsRequestDict(TypedDict):
    status: NotRequired[StatusAmazonTranscribeServiceTranscriptionJobsApiOrStr]
    job_name_contains: NotRequired[str]
    next_token: NotRequired[str]
    max_results: NotRequired[int]
