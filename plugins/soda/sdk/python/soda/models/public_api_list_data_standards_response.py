from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data_standard_content_dto import DataStandardContentDto, DataStandardContentDtoDict


class PublicApiListDataStandardsResponse(SdkBaseModel):
    content: list[DataStandardContentDto]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int = Field(alias="totalElements")
    total_pages: int = Field(alias="totalPages")


class PublicApiListDataStandardsResponseDict(TypedDict):
    content: list[DataStandardContentDtoDict]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int
    total_pages: int
