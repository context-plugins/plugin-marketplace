from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .datasource_role_content_dto import DatasourceRoleContentDto, DatasourceRoleContentDtoDict
from .enums.responsibility_type_dto import ResponsibilityTypeDtoOrStr


class DatasourceResponsibilityContentDto(SdkBaseModel):
    managed: bool
    role: DatasourceRoleContentDto
    type_: ResponsibilityTypeDtoOrStr = Field(alias="type")
    user_group_id: Optional[str] = Field(default=UNSET, alias="userGroupId")
    user_id: Optional[str] = Field(default=UNSET, alias="userId")


class DatasourceResponsibilityContentDtoDict(TypedDict):
    managed: bool
    role: DatasourceRoleContentDtoDict
    type_: ResponsibilityTypeDtoOrStr
    user_group_id: NotRequired[str]
    user_id: NotRequired[str]
