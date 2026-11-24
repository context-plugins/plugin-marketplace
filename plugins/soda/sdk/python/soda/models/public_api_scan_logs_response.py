from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .logs_content_dto import LogsContentDto, LogsContentDtoDict


class PublicApiScanLogsResponse(SdkBaseModel):
    content: list[LogsContentDto]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int = Field(alias="totalElements")
    total_pages: int = Field(alias="totalPages")


class PublicApiScanLogsResponseDict(TypedDict):
    content: list[LogsContentDtoDict]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int
    total_pages: int
