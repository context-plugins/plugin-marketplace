from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class PublishTraceResponse(SdkBaseModel):
    success: bool = True
    message: str
    public_url: str
    trace_id: UUID


class PublishTraceResponseDict(TypedDict):
    success: NotRequired[bool]
    message: str
    public_url: str
    trace_id: UUID
