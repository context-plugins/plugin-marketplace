from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BuildUploadUrlResponse(SdkBaseModel):
    upload_url: str
    build_id: UUID


class BuildUploadUrlResponseDict(TypedDict):
    upload_url: str
    build_id: UUID
