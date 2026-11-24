from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.public_api_datasource_type_dto import PublicApiDatasourceTypeDtoOrStr


class PublicApiDatasourceDto(SdkBaseModel):
    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    id: Optional[str] = UNSET
    label: Optional[str] = UNSET
    name: Optional[str] = UNSET
    type_: Optional[PublicApiDatasourceTypeDtoOrStr] = Field(default=UNSET, alias="type")
    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")


class PublicApiDatasourceDtoDict(TypedDict):
    created_at: NotRequired[RFC3339DateTime]
    id: NotRequired[str]
    label: NotRequired[str]
    name: NotRequired[str]
    type_: NotRequired[PublicApiDatasourceTypeDtoOrStr]
    updated_at: NotRequired[RFC3339DateTime]
