from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .external_origin import ExternalOrigin, ExternalOriginDict
from .job_metadata import JobMetadata, JobMetadataDict


class JobResponse(SdkBaseModel):
    id: UUID
    name: Optional[str] = UNSET
    description: Optional[str] = UNSET
    taskset_id: Optional[UUID] = UNSET
    taskset_name: Optional[str] = UNSET
    project_id: UUID
    status: str
    max_steps: int
    group_size: int
    max_concurrent: Optional[int] = UNSET
    metadata: Optional[JobMetadata] = UNSET
    is_remote: bool
    imported_from: Optional[ExternalOrigin] = UNSET
    public: bool = False
    is_owner: bool = False
    can_edit: bool = False
    user_name: Optional[str] = UNSET
    user_avatar_url: Optional[str] = UNSET
    created_at: RFC3339DateTime


class JobResponseDict(TypedDict):
    id: UUID
    name: NotRequired[str]
    description: NotRequired[str]
    taskset_id: NotRequired[UUID]
    taskset_name: NotRequired[str]
    project_id: UUID
    status: str
    max_steps: int
    group_size: int
    max_concurrent: NotRequired[int]
    metadata: NotRequired[JobMetadataDict]
    is_remote: bool
    imported_from: NotRequired[ExternalOriginDict]
    public: NotRequired[bool]
    is_owner: NotRequired[bool]
    can_edit: NotRequired[bool]
    user_name: NotRequired[str]
    user_avatar_url: NotRequired[str]
    created_at: RFC3339DateTime
