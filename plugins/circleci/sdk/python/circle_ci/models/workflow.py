from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status_circle_ci_rest_api_v2_pipeline_api import StatusCircleCiRestApiV2PipelineApiOrStr


class Workflow(SdkBaseModel):
    pipeline_id: Optional[UUID] = UNSET
    """The ID of the pipeline this workflow belongs to"""

    id: Optional[UUID] = UNSET
    """The unique identifier of the workflow"""

    name: Optional[str] = UNSET
    """The name of the workflow"""

    project_slug: Optional[str] = UNSET
    """The project slug"""

    status: Optional[StatusCircleCiRestApiV2PipelineApiOrStr] = UNSET
    """The current status of the workflow"""

    started_by: Optional[UUID] = UNSET
    """The ID of the user who started the workflow"""

    pipeline_number: Optional[int] = UNSET
    """The pipeline number"""

    created_at: Optional[RFC3339DateTime] = UNSET
    """When the workflow was created"""

    stopped_at: Optional[RFC3339DateTime] = UNSET
    """When the workflow stopped"""


class WorkflowDict(TypedDict):
    pipeline_id: NotRequired[UUID]
    id: NotRequired[UUID]
    name: NotRequired[str]
    project_slug: NotRequired[str]
    status: NotRequired[StatusCircleCiRestApiV2PipelineApiOrStr]
    started_by: NotRequired[UUID]
    pipeline_number: NotRequired[int]
    created_at: NotRequired[RFC3339DateTime]
    stopped_at: NotRequired[RFC3339DateTime]
