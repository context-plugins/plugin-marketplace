from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .dataset_column_profiling_content_dto import DatasetColumnProfilingContentDto, DatasetColumnProfilingContentDtoDict
from .dataset_time_partition_dto import DatasetTimePartitionDto, DatasetTimePartitionDtoDict
from .profiling_sampling_strategy_configuration_dto import (
    ProfilingSamplingStrategyConfigurationDto,
    ProfilingSamplingStrategyConfigurationDtoDict,
)
from .zoned_cron_dto import ZonedCronDto, ZonedCronDtoDict


class PublicApiDatasetProfilingResponse(SdkBaseModel):
    column_count: Optional[int] = Field(default=UNSET, alias="columnCount")
    columns: list[DatasetColumnProfilingContentDto]
    dataset_id: str = Field(alias="datasetId")
    enabled: Optional[bool] = UNSET
    partition_column: Optional[str] = Field(default=UNSET, alias="partitionColumn")
    profiling_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="profilingTime")
    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    sampling_strategy_configuration: Optional[ProfilingSamplingStrategyConfigurationDto] = Field(
        default=UNSET, alias="samplingStrategyConfiguration"
    )
    scan_schedule: Optional[ZonedCronDto] = Field(default=UNSET, alias="scanSchedule")
    time_partition: Optional[DatasetTimePartitionDto] = Field(default=UNSET, alias="timePartition")


class PublicApiDatasetProfilingResponseDict(TypedDict):
    column_count: NotRequired[int]
    columns: list[DatasetColumnProfilingContentDtoDict]
    dataset_id: str
    enabled: NotRequired[bool]
    partition_column: NotRequired[str]
    profiling_time: NotRequired[RFC3339DateTime]
    row_count: NotRequired[int]
    sampling_strategy_configuration: NotRequired[ProfilingSamplingStrategyConfigurationDtoDict]
    scan_schedule: NotRequired[ZonedCronDtoDict]
    time_partition: NotRequired[DatasetTimePartitionDtoDict]
