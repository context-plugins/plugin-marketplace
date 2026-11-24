from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .dataset_responsibility_content_dto import DatasetResponsibilityContentDto, DatasetResponsibilityContentDtoDict


class PublicApiDatasetResponsibilitiesResponse(SdkBaseModel):
    content: list[DatasetResponsibilityContentDto]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int = Field(alias="totalElements")
    total_pages: int = Field(alias="totalPages")


class PublicApiDatasetResponsibilitiesResponseDict(TypedDict):
    content: list[DatasetResponsibilityContentDtoDict]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int
    total_pages: int
