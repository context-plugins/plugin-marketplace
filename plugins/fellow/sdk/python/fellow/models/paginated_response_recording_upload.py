from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .page_info import PageInfo, PageInfoDict
from .recording_upload import RecordingUpload, RecordingUploadDict


class PaginatedResponseRecordingUpload(SdkBaseModel):
    page_info: PageInfo
    """Information about a page returned in a paginated response."""

    data: list[RecordingUpload]


class PaginatedResponseRecordingUploadDict(TypedDict):
    page_info: PageInfoDict
    data: list[RecordingUploadDict]
