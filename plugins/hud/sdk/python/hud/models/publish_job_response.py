from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class PublishJobResponse(SdkBaseModel):
    success: bool = True
    message: str
    public_url: str
    job_id: UUID


class PublishJobResponseDict(TypedDict):
    success: NotRequired[bool]
    message: str
    public_url: str
    job_id: UUID
