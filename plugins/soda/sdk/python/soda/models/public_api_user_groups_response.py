from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .user_group_content_dto import UserGroupContentDto, UserGroupContentDtoDict


class PublicApiUserGroupsResponse(SdkBaseModel):
    content: list[UserGroupContentDto]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int = Field(alias="totalElements")
    total_pages: int = Field(alias="totalPages")


class PublicApiUserGroupsResponseDict(TypedDict):
    content: list[UserGroupContentDtoDict]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int
    total_pages: int
