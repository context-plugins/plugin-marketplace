from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CancelRequest(SdkBaseModel):
    trace_id: UUID


class CancelRequestDict(TypedDict):
    trace_id: UUID
