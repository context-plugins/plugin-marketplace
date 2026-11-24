from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datasets_content_dto import DatasetsContentDto, DatasetsContentDtoDict


class PublicApiDatasetsResponse(SdkBaseModel):
    content: list[DatasetsContentDto]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int = Field(alias="totalElements")
    total_pages: int = Field(alias="totalPages")


class PublicApiDatasetsResponseDict(TypedDict):
    content: list[DatasetsContentDtoDict]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int
    total_pages: int
