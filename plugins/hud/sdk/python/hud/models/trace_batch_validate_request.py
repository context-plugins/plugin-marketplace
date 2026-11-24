from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TraceBatchValidateRequest(SdkBaseModel):
    trace_ids: list[UUID]
    is_valid: bool


class TraceBatchValidateRequestDict(TypedDict):
    trace_ids: list[UUID]
    is_valid: bool
