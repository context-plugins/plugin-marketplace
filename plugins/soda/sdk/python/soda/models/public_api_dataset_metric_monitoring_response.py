from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .column_metric_monitor_dto import ColumnMetricMonitorDto, ColumnMetricMonitorDtoDict
from .custom_metric_monitor_dto import CustomMetricMonitorDto, CustomMetricMonitorDtoDict
from .dataset_metric_monitor_configuration_dto import (
    DatasetMetricMonitorConfigurationDto,
    DatasetMetricMonitorConfigurationDtoDict,
)
from .dataset_time_partition_dto import DatasetTimePartitionDto, DatasetTimePartitionDtoDict
from .zoned_cron_dto import ZonedCronDto, ZonedCronDtoDict


class PublicApiDatasetMetricMonitoringResponse(SdkBaseModel):
    column_metric_monitors: Optional[list[ColumnMetricMonitorDto]] = Field(default=UNSET, alias="columnMetricMonitors")
    custom_sql_metric_monitors: Optional[list[CustomMetricMonitorDto]] = Field(
        default=UNSET, alias="customSqlMetricMonitors"
    )
    dataset_id: Optional[str] = Field(default=UNSET, alias="datasetId")
    dataset_metric_monitors_configuration: Optional[list[DatasetMetricMonitorConfigurationDto]] = Field(
        default=UNSET, alias="datasetMetricMonitorsConfiguration"
    )
    enabled: Optional[bool] = UNSET
    historical_metric_collection_scan_start_date: Optional[RFC3339DateTime] = Field(
        default=UNSET, alias="historicalMetricCollectionScanStartDate"
    )
    partition_column: Optional[str] = Field(default=UNSET, alias="partitionColumn")
    scan_schedule: Optional[ZonedCronDto] = Field(default=UNSET, alias="scanSchedule")
    time_partition: Optional[DatasetTimePartitionDto] = Field(default=UNSET, alias="timePartition")


class PublicApiDatasetMetricMonitoringResponseDict(TypedDict):
    column_metric_monitors: NotRequired[list[ColumnMetricMonitorDtoDict]]
    custom_sql_metric_monitors: NotRequired[list[CustomMetricMonitorDtoDict]]
    dataset_id: NotRequired[str]
    dataset_metric_monitors_configuration: NotRequired[list[DatasetMetricMonitorConfigurationDtoDict]]
    enabled: NotRequired[bool]
    historical_metric_collection_scan_start_date: NotRequired[RFC3339DateTime]
    partition_column: NotRequired[str]
    scan_schedule: NotRequired[ZonedCronDtoDict]
    time_partition: NotRequired[DatasetTimePartitionDtoDict]
