from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .build_source_entry import BuildSourceEntry, BuildSourceEntryDict


class BuildWorkspaceListResponse(SdkBaseModel):
    build_id: UUID
    path: str
    entries: Optional[list[BuildSourceEntry]] = UNSET
    next_cursor: Optional[str] = UNSET


class BuildWorkspaceListResponseDict(TypedDict):
    build_id: UUID
    path: str
    entries: NotRequired[list[BuildSourceEntryDict]]
    next_cursor: NotRequired[str]
