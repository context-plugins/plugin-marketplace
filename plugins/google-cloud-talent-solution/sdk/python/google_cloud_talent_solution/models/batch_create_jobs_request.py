from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .job import Job, JobDict


class BatchCreateJobsRequest(SdkBaseModel):
    """Request to create a batch of jobs."""

    jobs: Optional[list[Job]] = UNSET
    """Required. The jobs to be created. A maximum of 200 jobs can be created in a batch."""


class BatchCreateJobsRequestDict(TypedDict):
    jobs: NotRequired[list[JobDict]]
