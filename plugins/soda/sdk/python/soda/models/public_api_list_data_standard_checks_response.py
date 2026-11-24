from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data_standard_check_content_dto import DataStandardCheckContentDto, DataStandardCheckContentDtoDict


class PublicApiListDataStandardChecksResponse(SdkBaseModel):
    content: list[DataStandardCheckContentDto]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int = Field(alias="totalElements")
    total_pages: int = Field(alias="totalPages")


class PublicApiListDataStandardChecksResponseDict(TypedDict):
    content: list[DataStandardCheckContentDtoDict]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int
    total_pages: int
