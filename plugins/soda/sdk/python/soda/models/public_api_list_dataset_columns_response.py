from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .public_api_dataset_column_content_dto import (
    PublicApiDatasetColumnContentDto,
    PublicApiDatasetColumnContentDtoDict,
)


class PublicApiListDatasetColumnsResponse(SdkBaseModel):
    content: list[PublicApiDatasetColumnContentDto]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int = Field(alias="totalElements")
    total_pages: int = Field(alias="totalPages")


class PublicApiListDatasetColumnsResponseDict(TypedDict):
    content: list[PublicApiDatasetColumnContentDtoDict]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int
    total_pages: int
