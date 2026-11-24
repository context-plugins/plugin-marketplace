from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data_standard_dataset_content_dto import DataStandardDatasetContentDto, DataStandardDatasetContentDtoDict


class PublicApiListDataStandardDatasetsResponse(SdkBaseModel):
    content: list[DataStandardDatasetContentDto]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int = Field(alias="totalElements")
    total_pages: int = Field(alias="totalPages")


class PublicApiListDataStandardDatasetsResponseDict(TypedDict):
    content: list[DataStandardDatasetContentDtoDict]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int
    total_pages: int
