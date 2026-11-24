from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_standard_owner_request_dto import DataStandardOwnerRequestDto, DataStandardOwnerRequestDtoDict
from .data_standard_schedule_dto import DataStandardScheduleDto, DataStandardScheduleDtoDict
from .data_standard_scope_dto import DataStandardScopeDto, DataStandardScopeDtoDict
from .enums.data_standard_status_dto import DataStandardStatusDtoOrStr


class PublicApiDataStandardRequestDto(SdkBaseModel):
    attributes: Optional[Any] = UNSET
    contents: str
    description: Optional[str] = UNSET
    label: Optional[str] = UNSET
    name: str
    owners: list[DataStandardOwnerRequestDto]
    schedule: Optional[DataStandardScheduleDto] = UNSET
    scope: Optional[DataStandardScopeDto] = UNSET
    status: DataStandardStatusDtoOrStr


class PublicApiDataStandardRequestDtoDict(TypedDict):
    attributes: NotRequired[Any]
    contents: str
    description: NotRequired[str]
    label: NotRequired[str]
    name: str
    owners: list[DataStandardOwnerRequestDtoDict]
    schedule: NotRequired[DataStandardScheduleDtoDict]
    scope: NotRequired[DataStandardScopeDtoDict]
    status: DataStandardStatusDtoOrStr
