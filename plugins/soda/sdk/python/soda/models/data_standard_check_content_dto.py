from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.check_result_level_dto import CheckResultLevelDtoOrStr
from .enums.check_type_dto import CheckTypeDtoOrStr


class DataStandardCheckContentDto(SdkBaseModel):
    check_type: Optional[CheckTypeDtoOrStr] = Field(default=UNSET, alias="checkType")
    compliance: Optional[float] = UNSET
    dataset_count: Optional[int] = Field(default=UNSET, alias="datasetCount")
    failing_count: Optional[int] = Field(default=UNSET, alias="failingCount")
    last_scan_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastScanTime")
    name: Optional[str] = UNSET
    not_evaluated_count: Optional[int] = Field(default=UNSET, alias="notEvaluatedCount")
    passing_count: Optional[int] = Field(default=UNSET, alias="passingCount")
    warning_count: Optional[int] = Field(default=UNSET, alias="warningCount")
    worst_level: Optional[CheckResultLevelDtoOrStr] = Field(default=UNSET, alias="worstLevel")


class DataStandardCheckContentDtoDict(TypedDict):
    check_type: NotRequired[CheckTypeDtoOrStr]
    compliance: NotRequired[float]
    dataset_count: NotRequired[int]
    failing_count: NotRequired[int]
    last_scan_time: NotRequired[RFC3339DateTime]
    name: NotRequired[str]
    not_evaluated_count: NotRequired[int]
    passing_count: NotRequired[int]
    warning_count: NotRequired[int]
    worst_level: NotRequired[CheckResultLevelDtoOrStr]
