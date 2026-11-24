from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .data_standard_check_results_dto import DataStandardCheckResultsDto, DataStandardCheckResultsDtoDict
from .dataset_owner_dto import DatasetOwnerDto, DatasetOwnerDtoDict


class DataStandardDatasetContentDto(SdkBaseModel):
    check_results: Optional[DataStandardCheckResultsDto] = Field(default=UNSET, alias="checkResults")
    cloud_url: Optional[str] = Field(default=UNSET, alias="cloudUrl")
    id: str
    label: Optional[str] = UNSET
    last_scan_id: Optional[str] = Field(default=UNSET, alias="lastScanId")
    last_scan_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastScanTime")
    name: str
    owners: Optional[list[DatasetOwnerDto]] = UNSET
    qualified_name: Optional[str] = Field(default=UNSET, alias="qualifiedName")


class DataStandardDatasetContentDtoDict(TypedDict):
    check_results: NotRequired[DataStandardCheckResultsDtoDict]
    cloud_url: NotRequired[str]
    id: str
    label: NotRequired[str]
    last_scan_id: NotRequired[str]
    last_scan_time: NotRequired[RFC3339DateTime]
    name: str
    owners: NotRequired[list[DatasetOwnerDtoDict]]
    qualified_name: NotRequired[str]
