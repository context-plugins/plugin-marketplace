from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.dataset_owner_type_dto import DatasetOwnerTypeDtoOrStr


class DataStandardOwnerRequestDto(SdkBaseModel):
    type_: DatasetOwnerTypeDtoOrStr = Field(alias="type")
    user_group_id: Optional[str] = Field(default=UNSET, alias="userGroupId")
    user_id: Optional[str] = Field(default=UNSET, alias="userId")


class DataStandardOwnerRequestDtoDict(TypedDict):
    type_: DatasetOwnerTypeDtoOrStr
    user_group_id: NotRequired[str]
    user_id: NotRequired[str]
