from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .page_info import PageInfo, PageInfoDict
from .recording import Recording, RecordingDict


class PaginatedResponseRecording(SdkBaseModel):
    page_info: PageInfo
    """Information about a page returned in a paginated response."""

    data: list[Recording]


class PaginatedResponseRecordingDict(TypedDict):
    page_info: PageInfoDict
    data: list[RecordingDict]
