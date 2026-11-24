from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .data_standard_check_results_dto import DataStandardCheckResultsDto, DataStandardCheckResultsDtoDict
from .data_standard_schedule_dto import DataStandardScheduleDto, DataStandardScheduleDtoDict
from .data_standard_scope_dto import DataStandardScopeDto, DataStandardScopeDtoDict
from .dataset_owner_dto import DatasetOwnerDto, DatasetOwnerDtoDict
from .enums.data_standard_status_dto import DataStandardStatusDtoOrStr


class DataStandardContentDto(SdkBaseModel):
    attributes: Optional[Any] = UNSET
    check_results: Optional[DataStandardCheckResultsDto] = Field(default=UNSET, alias="checkResults")
    cloud_url: Optional[str] = Field(default=UNSET, alias="cloudUrl")
    compliance: Optional[int] = UNSET
    contents: Optional[str] = UNSET
    created: Optional[RFC3339DateTime] = UNSET
    dataset_count: Optional[int] = Field(default=UNSET, alias="datasetCount")
    description: Optional[str] = UNSET
    id: str
    label: Optional[str] = UNSET
    last_scan_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastScanTime")
    last_updated: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdated")
    name: Optional[str] = UNSET
    owners: Optional[list[DatasetOwnerDto]] = UNSET
    schedule: Optional[DataStandardScheduleDto] = UNSET
    scope: Optional[DataStandardScopeDto] = UNSET
    status: Optional[DataStandardStatusDtoOrStr] = UNSET


class DataStandardContentDtoDict(TypedDict):
    attributes: NotRequired[Any]
    check_results: NotRequired[DataStandardCheckResultsDtoDict]
    cloud_url: NotRequired[str]
    compliance: NotRequired[int]
    contents: NotRequired[str]
    created: NotRequired[RFC3339DateTime]
    dataset_count: NotRequired[int]
    description: NotRequired[str]
    id: str
    label: NotRequired[str]
    last_scan_time: NotRequired[RFC3339DateTime]
    last_updated: NotRequired[RFC3339DateTime]
    name: NotRequired[str]
    owners: NotRequired[list[DatasetOwnerDtoDict]]
    schedule: NotRequired[DataStandardScheduleDtoDict]
    scope: NotRequired[DataStandardScopeDtoDict]
    status: NotRequired[DataStandardStatusDtoOrStr]
