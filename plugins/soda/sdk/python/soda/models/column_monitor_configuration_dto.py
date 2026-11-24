from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .exclusion_zone_dto import ExclusionZoneDto, ExclusionZoneDtoDict
from .group_by_column_configuration_dto import GroupByColumnConfigurationDto, GroupByColumnConfigurationDtoDict
from .threshold_strategy_dto import ThresholdStrategyDto, ThresholdStrategyDtoDict
from .valid_range_dto import ValidRangeDto, ValidRangeDtoDict


class ColumnMonitorConfigurationDto(SdkBaseModel):
    group_by_columns: Optional[list[GroupByColumnConfigurationDto]] = Field(default=UNSET, alias="groupByColumns")
    exclusion_zones: Optional[list[ExclusionZoneDto]] = Field(default=UNSET, alias="exclusionZones")
    is_enabled: Optional[bool] = Field(default=UNSET, alias="isEnabled")
    is_sampling_enabled: Optional[bool] = Field(default=UNSET, alias="isSamplingEnabled")
    sensitivity: Optional[float] = UNSET
    threshold_strategy: Optional[ThresholdStrategyDto] = Field(default=UNSET, alias="thresholdStrategy")
    valid_range: Optional[ValidRangeDto] = Field(default=UNSET, alias="validRange")


class ColumnMonitorConfigurationDtoDict(TypedDict):
    group_by_columns: NotRequired[list[GroupByColumnConfigurationDtoDict]]
    exclusion_zones: NotRequired[list[ExclusionZoneDtoDict]]
    is_enabled: NotRequired[bool]
    is_sampling_enabled: NotRequired[bool]
    sensitivity: NotRequired[float]
    threshold_strategy: NotRequired[ThresholdStrategyDtoDict]
    valid_range: NotRequired[ValidRangeDtoDict]
