from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .user_content_dto import UserContentDto, UserContentDtoDict


class PublicApiUsersResponse(SdkBaseModel):
    content: list[UserContentDto]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int = Field(alias="totalElements")
    total_pages: int = Field(alias="totalPages")


class PublicApiUsersResponseDict(TypedDict):
    content: list[UserContentDtoDict]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int
    total_pages: int
