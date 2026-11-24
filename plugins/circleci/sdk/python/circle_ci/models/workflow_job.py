from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.type_circle_ci_rest_api_v2_workflow_api import TypeCircleCiRestApiV2WorkflowApiOrStr


class WorkflowJob(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """The unique identifier of the job"""

    name: Optional[str] = UNSET
    """The name of the job"""

    type_: Optional[TypeCircleCiRestApiV2WorkflowApiOrStr] = Field(default=UNSET, alias="type")
    """The type of job"""

    status: Optional[str] = UNSET
    """The status of the job"""

    job_number: Optional[int] = UNSET
    """The job number"""

    started_at: Optional[RFC3339DateTime] = UNSET
    """When the job started"""

    stopped_at: Optional[RFC3339DateTime] = UNSET
    """When the job stopped"""

    dependencies: Optional[list[UUID]] = UNSET
    """IDs of jobs this job depends on"""


class WorkflowJobDict(TypedDict):
    id: NotRequired[UUID]
    name: NotRequired[str]
    type_: NotRequired[TypeCircleCiRestApiV2WorkflowApiOrStr]
    status: NotRequired[str]
    job_number: NotRequired[int]
    started_at: NotRequired[RFC3339DateTime]
    stopped_at: NotRequired[RFC3339DateTime]
    dependencies: NotRequired[list[UUID]]
