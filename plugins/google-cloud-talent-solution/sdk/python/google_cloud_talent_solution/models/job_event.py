from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type2 import Type2OrStr


class JobEvent(SdkBaseModel):
    """An event issued when a job seeker interacts with the application that implements Cloud Talent Solution."""

    jobs: Optional[list[str]] = UNSET
    """Required. The job name(s) associated with this event. For example, if this is an impression event, this field
    contains the identifiers of all jobs shown to the job seeker. If this was a view event, this field contains the
    identifier of the viewed job. The format is "projects/{project_id}/tenants/{tenant_id}/jobs/{job_id}", for example,
    "projects/foo/tenants/bar/jobs/baz"."""

    type_: Optional[Type2OrStr] = Field(default=UNSET, alias="type")
    """Required. The type of the event (see JobEventType)."""


class JobEventDict(TypedDict):
    jobs: NotRequired[list[str]]
    type_: NotRequired[Type2OrStr]
