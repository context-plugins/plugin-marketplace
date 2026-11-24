from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.dataset_owner_type_dto import DatasetOwnerTypeDtoOrStr
from .user_content_dto import UserContentDto, UserContentDtoDict
from .user_group_content_basic_dto import UserGroupContentBasicDto, UserGroupContentBasicDtoDict


class DatasetOwnerDto(SdkBaseModel):
    type_: DatasetOwnerTypeDtoOrStr = Field(alias="type")
    user: Optional[UserContentDto] = UNSET
    user_group: Optional[UserGroupContentBasicDto] = Field(default=UNSET, alias="userGroup")


class DatasetOwnerDtoDict(TypedDict):
    type_: DatasetOwnerTypeDtoOrStr
    user: NotRequired[UserContentDtoDict]
    user_group: NotRequired[UserGroupContentBasicDtoDict]
