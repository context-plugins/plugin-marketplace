from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BuildSourceDownloadResponse(SdkBaseModel):
    build_id: UUID
    path: str
    url: str
    expires_in: int


class BuildSourceDownloadResponseDict(TypedDict):
    build_id: UUID
    path: str
    url: str
    expires_in: int
