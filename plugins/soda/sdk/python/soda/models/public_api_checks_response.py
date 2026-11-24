from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .checks_content_dto import ChecksContentDto, ChecksContentDtoDict


class PublicApiChecksResponse(SdkBaseModel):
    content: list[ChecksContentDto]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int = Field(alias="totalElements")
    total_pages: int = Field(alias="totalPages")


class PublicApiChecksResponseDict(TypedDict):
    content: list[ChecksContentDtoDict]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int
    total_pages: int
