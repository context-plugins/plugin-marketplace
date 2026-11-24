from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datasource_responsibility_content_dto import (
    DatasourceResponsibilityContentDto,
    DatasourceResponsibilityContentDtoDict,
)


class PublicApiDatasourceResponsibilitiesResponse(SdkBaseModel):
    content: list[DatasourceResponsibilityContentDto]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int = Field(alias="totalElements")
    total_pages: int = Field(alias="totalPages")


class PublicApiDatasourceResponsibilitiesResponseDict(TypedDict):
    content: list[DatasourceResponsibilityContentDtoDict]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int
    total_pages: int
