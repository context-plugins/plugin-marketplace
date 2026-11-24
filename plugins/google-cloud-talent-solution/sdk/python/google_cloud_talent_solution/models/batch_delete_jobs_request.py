from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BatchDeleteJobsRequest(SdkBaseModel):
    """Request to delete a batch of jobs."""

    names: Optional[list[str]] = UNSET
    """The names of the jobs to delete. The format is "projects/{project_id}/tenants/{tenant_id}/jobs/{job_id}". For
    example, "projects/foo/tenants/bar/jobs/baz". A maximum of 200 jobs can be deleted in a batch."""


class BatchDeleteJobsRequestDict(TypedDict):
    names: NotRequired[list[str]]
