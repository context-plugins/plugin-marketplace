from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .dataset_role_content_dto import DatasetRoleContentDto, DatasetRoleContentDtoDict


class PublicApiDatasetRolesResponse(SdkBaseModel):
    content: list[DatasetRoleContentDto]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int = Field(alias="totalElements")
    total_pages: int = Field(alias="totalPages")


class PublicApiDatasetRolesResponseDict(TypedDict):
    content: list[DatasetRoleContentDtoDict]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int
    total_pages: int
