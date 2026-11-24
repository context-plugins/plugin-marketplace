from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.responsibility_type_dto import ResponsibilityTypeDtoOrStr
from .user_content_dto import UserContentDto, UserContentDtoDict
from .user_group_content_basic_dto import UserGroupContentBasicDto, UserGroupContentBasicDtoDict


class DatasetOwnerDtoSodaCloudApiV4DatasetsApi(SdkBaseModel):
    type_: ResponsibilityTypeDtoOrStr = Field(alias="type")
    user: Optional[UserContentDto] = UNSET
    user_group: Optional[UserGroupContentBasicDto] = Field(default=UNSET, alias="userGroup")


class DatasetOwnerDtoSodaCloudApiV4DatasetsApiDict(TypedDict):
    type_: ResponsibilityTypeDtoOrStr
    user: NotRequired[UserContentDtoDict]
    user_group: NotRequired[UserGroupContentBasicDtoDict]
