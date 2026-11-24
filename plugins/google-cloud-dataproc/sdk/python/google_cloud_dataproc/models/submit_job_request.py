from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .job2 import Job2, Job2Dict


class SubmitJobRequest(SdkBaseModel):
    """A request to submit a job."""

    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """Optional. A unique id used to identify the request. If the server receives two SubmitJobRequest
    (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.SubmitJobRequest)s
    with the same id, then the second request will be ignored and the first Job created and stored in the backend is
    returned.It is recommended to always set this value to a UUID
    (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers
    (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters."""

    job: Optional[Job2] = UNSET
    """Required. The job resource."""


class SubmitJobRequestDict(TypedDict):
    request_id: NotRequired[str]
    job: NotRequired[Job2Dict]
