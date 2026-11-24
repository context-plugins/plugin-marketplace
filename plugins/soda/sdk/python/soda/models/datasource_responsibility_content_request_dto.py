from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.responsibility_type_dto import ResponsibilityTypeDtoOrStr


class DatasourceResponsibilityContentRequestDto(SdkBaseModel):
    role_id: str = Field(alias="roleId")
    type_: ResponsibilityTypeDtoOrStr = Field(alias="type")
    user_group_id: Optional[str] = Field(default=UNSET, alias="userGroupId")
    user_id: Optional[str] = Field(default=UNSET, alias="userId")


class DatasourceResponsibilityContentRequestDtoDict(TypedDict):
    role_id: str
    type_: ResponsibilityTypeDtoOrStr
    user_group_id: NotRequired[str]
    user_id: NotRequired[str]
