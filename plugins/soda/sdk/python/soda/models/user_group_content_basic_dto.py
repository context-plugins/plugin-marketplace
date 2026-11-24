from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UserGroupContentBasicDto(SdkBaseModel):
    name: str
    user_group_id: str = Field(alias="userGroupId")


class UserGroupContentBasicDtoDict(TypedDict):
    name: str
    user_group_id: str
