from __future__ import annotations

from typing import Literal
from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .trace_storage_object import TraceStorageObject, TraceStorageObjectDict


class TraceStorageObjectListResponse(SdkBaseModel):
    trace_id: UUID
    kind: Literal["artifact"] = "artifact"
    objects: list[TraceStorageObject]


class TraceStorageObjectListResponseDict(TypedDict):
    trace_id: UUID
    kind: Literal["artifact"]
    objects: list[TraceStorageObjectDict]
