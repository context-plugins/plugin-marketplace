from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class Pipeline(SdkBaseModel):
    id: Optional[UUID] = UNSET
    url: Optional[str] = UNSET
    web_url: Optional[str] = UNSET
    name: Optional[str] = UNSET
    slug: Optional[str] = UNSET
    repository: Optional[str] = UNSET
    cluster_id: Optional[UUID] = UNSET
    default_branch: Optional[str] = UNSET
    description: Optional[str] = UNSET
    configuration: Optional[str] = UNSET
    steps: Optional[list[Any]] = UNSET
    created_at: Optional[RFC3339DateTime] = UNSET
    archived_at: OptionalNullable[RFC3339DateTime] = UNSET


class PipelineDict(TypedDict):
    id: NotRequired[UUID]
    url: NotRequired[str]
    web_url: NotRequired[str]
    name: NotRequired[str]
    slug: NotRequired[str]
    repository: NotRequired[str]
    cluster_id: NotRequired[UUID]
    default_branch: NotRequired[str]
    description: NotRequired[str]
    configuration: NotRequired[str]
    steps: NotRequired[list[Any]]
    created_at: NotRequired[RFC3339DateTime]
    archived_at: NotRequired[RFC3339DateTime | None]
