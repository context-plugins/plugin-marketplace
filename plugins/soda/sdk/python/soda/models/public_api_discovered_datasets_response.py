from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .discovered_dataset_content_dto import DiscoveredDatasetContentDto, DiscoveredDatasetContentDtoDict


class PublicApiDiscoveredDatasetsResponse(SdkBaseModel):
    content: list[DiscoveredDatasetContentDto]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int = Field(alias="totalElements")
    total_pages: int = Field(alias="totalPages")


class PublicApiDiscoveredDatasetsResponseDict(TypedDict):
    content: list[DiscoveredDatasetContentDtoDict]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int
    total_pages: int
