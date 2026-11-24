from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BuildSourcePreviewResponse(SdkBaseModel):
    build_id: UUID
    path: str
    content: str
    size: int
    content_hash: str
    content_type: str


class BuildSourcePreviewResponseDict(TypedDict):
    build_id: UUID
    path: str
    content: str
    size: int
    content_hash: str
    content_type: str
