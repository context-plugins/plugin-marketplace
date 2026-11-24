from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.source_index_status import SourceIndexStatusOrStr
from .env_manifest import EnvManifest, EnvManifestDict
from .mcp_lock import McpLock, McpLockDict


class BuildResponse(SdkBaseModel):
    id: UUID
    registry_id: UUID
    status: str
    sdk_generation: str
    version: Optional[int] = UNSET
    uri: Optional[str] = UNSET
    image_name: Optional[str] = UNSET
    digest: Optional[str] = UNSET
    content_digest: Optional[str] = UNSET
    lock: Optional[McpLock] = UNSET
    manifest: Optional[EnvManifest] = UNSET
    duration_seconds: Optional[int] = UNSET
    error_message: Optional[str] = UNSET
    runtime_config: Optional[Any] = UNSET
    source_index_status: SourceIndexStatusOrStr
    source_index_error: Optional[str] = UNSET
    source_index_started_at: Optional[RFC3339DateTime] = UNSET
    source_indexed_at: Optional[RFC3339DateTime] = UNSET
    created_at: RFC3339DateTime
    updated_at: Optional[RFC3339DateTime] = UNSET
    branch: Optional[str] = UNSET
    github_url: Optional[str] = UNSET
    user_name: Optional[str] = UNSET
    scenario_count: Optional[int] = UNSET


class BuildResponseDict(TypedDict):
    id: UUID
    registry_id: UUID
    status: str
    sdk_generation: str
    version: NotRequired[int]
    uri: NotRequired[str]
    image_name: NotRequired[str]
    digest: NotRequired[str]
    content_digest: NotRequired[str]
    lock: NotRequired[McpLockDict]
    manifest: NotRequired[EnvManifestDict]
    duration_seconds: NotRequired[int]
    error_message: NotRequired[str]
    runtime_config: NotRequired[Any]
    source_index_status: SourceIndexStatusOrStr
    source_index_error: NotRequired[str]
    source_index_started_at: NotRequired[RFC3339DateTime]
    source_indexed_at: NotRequired[RFC3339DateTime]
    created_at: RFC3339DateTime
    updated_at: NotRequired[RFC3339DateTime]
    branch: NotRequired[str]
    github_url: NotRequired[str]
    user_name: NotRequired[str]
    scenario_count: NotRequired[int]
