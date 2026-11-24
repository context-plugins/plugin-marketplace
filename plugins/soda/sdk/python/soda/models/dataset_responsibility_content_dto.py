from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dataset_role_content_dto import DatasetRoleContentDto, DatasetRoleContentDtoDict
from .enums.responsibility_type_dto import ResponsibilityTypeDtoOrStr


class DatasetResponsibilityContentDto(SdkBaseModel):
    managed: bool
    role: DatasetRoleContentDto
    type_: ResponsibilityTypeDtoOrStr = Field(alias="type")
    user_group_id: Optional[str] = Field(default=UNSET, alias="userGroupId")
    user_id: Optional[str] = Field(default=UNSET, alias="userId")


class DatasetResponsibilityContentDtoDict(TypedDict):
    managed: bool
    role: DatasetRoleContentDtoDict
    type_: ResponsibilityTypeDtoOrStr
    user_group_id: NotRequired[str]
    user_id: NotRequired[str]
