from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data_standard_scope_matching_dataset_content_dto import (
    DataStandardScopeMatchingDatasetContentDto,
    DataStandardScopeMatchingDatasetContentDtoDict,
)


class PublicApiPreviewDataStandardScopeResponse(SdkBaseModel):
    content: list[DataStandardScopeMatchingDatasetContentDto]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int = Field(alias="totalElements")
    total_pages: int = Field(alias="totalPages")


class PublicApiPreviewDataStandardScopeResponseDict(TypedDict):
    content: list[DataStandardScopeMatchingDatasetContentDtoDict]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int
    total_pages: int
