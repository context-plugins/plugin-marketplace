from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.public_api_runner_type_dto import PublicApiRunnerTypeDtoOrStr
from .public_api_runner_versions_dto import PublicApiRunnerVersionsDto, PublicApiRunnerVersionsDtoDict


class PublicApiRunnerDto(SdkBaseModel):
    id: Optional[str] = UNSET
    is_online: Optional[bool] = Field(default=UNSET, alias="isOnline")
    label: Optional[str] = UNSET
    last_seen_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastSeenTimestamp")
    name: Optional[str] = UNSET
    type_: Optional[PublicApiRunnerTypeDtoOrStr] = Field(default=UNSET, alias="type")
    versions: Optional[PublicApiRunnerVersionsDto] = UNSET


class PublicApiRunnerDtoDict(TypedDict):
    id: NotRequired[str]
    is_online: NotRequired[bool]
    label: NotRequired[str]
    last_seen_timestamp: NotRequired[RFC3339DateTime]
    name: NotRequired[str]
    type_: NotRequired[PublicApiRunnerTypeDtoOrStr]
    versions: NotRequired[PublicApiRunnerVersionsDtoDict]
