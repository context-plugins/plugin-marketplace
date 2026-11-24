from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .build_source_entry import BuildSourceEntry, BuildSourceEntryDict
from .enums.status import StatusOrStr


class BuildSourceListResponse(SdkBaseModel):
    build_id: UUID
    status: StatusOrStr
    error: Optional[str] = UNSET
    path: str
    entries: Optional[list[BuildSourceEntry]] = UNSET
    next_cursor: Optional[str] = UNSET


class BuildSourceListResponseDict(TypedDict):
    build_id: UUID
    status: StatusOrStr
    error: NotRequired[str]
    path: str
    entries: NotRequired[list[BuildSourceEntryDict]]
    next_cursor: NotRequired[str]
