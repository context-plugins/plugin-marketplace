from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .exclusion_zone_dto import ExclusionZoneDto, ExclusionZoneDtoDict
from .threshold_strategy_dto import ThresholdStrategyDto, ThresholdStrategyDtoDict
from .valid_range_dto import ValidRangeDto, ValidRangeDtoDict


class CustomSqlMonitorConfigurationUpdateDto(SdkBaseModel):
    group_by_column_names: Optional[list[str]] = Field(default=UNSET, alias="groupByColumnNames")
    result_metric: Optional[str] = Field(default=UNSET, alias="resultMetric")
    sql_query: Optional[str] = Field(default=UNSET, alias="sqlQuery")
    exclusion_zones: Optional[list[ExclusionZoneDto]] = Field(default=UNSET, alias="exclusionZones")
    is_enabled: Optional[bool] = Field(default=UNSET, alias="isEnabled")
    is_sampling_enabled: Optional[bool] = Field(default=UNSET, alias="isSamplingEnabled")
    sensitivity: Optional[float] = UNSET
    threshold_strategy: Optional[ThresholdStrategyDto] = Field(default=UNSET, alias="thresholdStrategy")
    valid_range: Optional[ValidRangeDto] = Field(default=UNSET, alias="validRange")


class CustomSqlMonitorConfigurationUpdateDtoDict(TypedDict):
    group_by_column_names: NotRequired[list[str]]
    result_metric: NotRequired[str]
    sql_query: NotRequired[str]
    exclusion_zones: NotRequired[list[ExclusionZoneDtoDict]]
    is_enabled: NotRequired[bool]
    is_sampling_enabled: NotRequired[bool]
    sensitivity: NotRequired[float]
    threshold_strategy: NotRequired[ThresholdStrategyDtoDict]
    valid_range: NotRequired[ValidRangeDtoDict]
