from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TraceEnvironmentRef(SdkBaseModel):
    id: UUID
    name: str
    registry_type: Optional[str] = UNSET
    build_id: Optional[UUID] = UNSET
    build_version: Optional[int] = UNSET
    build_digest: Optional[str] = UNSET
    can_view_source: bool = False


class TraceEnvironmentRefDict(TypedDict):
    id: UUID
    name: str
    registry_type: NotRequired[str]
    build_id: NotRequired[UUID]
    build_version: NotRequired[int]
    build_digest: NotRequired[str]
    can_view_source: NotRequired[bool]
