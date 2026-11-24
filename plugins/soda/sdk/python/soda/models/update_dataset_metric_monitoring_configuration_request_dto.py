from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .dataset_metric_monitor_configuration_dto import (
    DatasetMetricMonitorConfigurationDto,
    DatasetMetricMonitorConfigurationDtoDict,
)
from .zoned_cron_dto import ZonedCronDto, ZonedCronDtoDict


class UpdateDatasetMetricMonitoringConfigurationRequestDto(SdkBaseModel):
    dataset_metric_monitors_configuration: Optional[list[DatasetMetricMonitorConfigurationDto]] = Field(
        default=UNSET, alias="datasetMetricMonitorsConfiguration"
    )
    enabled: Optional[bool] = UNSET
    historical_metric_collection_scan_start_date: Optional[RFC3339DateTime] = Field(
        default=UNSET, alias="historicalMetricCollectionScanStartDate"
    )
    scan_schedule: Optional[ZonedCronDto] = Field(default=UNSET, alias="scanSchedule")


class UpdateDatasetMetricMonitoringConfigurationRequestDtoDict(TypedDict):
    dataset_metric_monitors_configuration: NotRequired[list[DatasetMetricMonitorConfigurationDtoDict]]
    enabled: NotRequired[bool]
    historical_metric_collection_scan_start_date: NotRequired[RFC3339DateTime]
    scan_schedule: NotRequired[ZonedCronDtoDict]
