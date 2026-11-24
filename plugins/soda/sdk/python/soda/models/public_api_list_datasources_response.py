from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .public_api_datasource_dto import PublicApiDatasourceDto, PublicApiDatasourceDtoDict


class PublicApiListDatasourcesResponse(SdkBaseModel):
    content: list[PublicApiDatasourceDto]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int = Field(alias="totalElements")
    total_pages: int = Field(alias="totalPages")


class PublicApiListDatasourcesResponseDict(TypedDict):
    content: list[PublicApiDatasourceDtoDict]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int
    total_pages: int
