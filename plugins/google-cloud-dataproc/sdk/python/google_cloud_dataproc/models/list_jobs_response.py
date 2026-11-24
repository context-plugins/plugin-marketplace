from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .job import Job, JobDict


class ListJobsResponse(SdkBaseModel):
    """A list of jobs in a project."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Optional. This token is included in the response if there are more results to fetch. To fetch additional results,
    provide this value as the page_token in a subsequent ListJobsRequest."""

    unreachable: Optional[list[str]] = UNSET
    """Output only. List of jobs with kms_key-encrypted parameters that could not be decrypted. A response to a jobs.get
    request may indicate the reason for the decryption failure for a specific job."""

    jobs: Optional[list[Job]] = UNSET
    """Output only. Jobs list."""


class ListJobsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    unreachable: NotRequired[list[str]]
    jobs: NotRequired[list[JobDict]]
