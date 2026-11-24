from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datasource_role_content_dto import DatasourceRoleContentDto, DatasourceRoleContentDtoDict


class PublicApiDatasourceRolesResponse(SdkBaseModel):
    content: list[DatasourceRoleContentDto]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int = Field(alias="totalElements")
    total_pages: int = Field(alias="totalPages")


class PublicApiDatasourceRolesResponseDict(TypedDict):
    content: list[DatasourceRoleContentDtoDict]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int
    total_pages: int
