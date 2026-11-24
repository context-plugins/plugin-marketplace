from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .user_content_dto import UserContentDto, UserContentDtoDict


class UserGroupContentDto(SdkBaseModel):
    name: str
    user_group_id: str = Field(alias="userGroupId")
    users: list[UserContentDto]


class UserGroupContentDtoDict(TypedDict):
    name: str
    user_group_id: str
    users: list[UserContentDtoDict]
