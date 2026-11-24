from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .public_api_update_dataset_owner_request_dto import (
    PublicApiUpdateDatasetOwnerRequestDto,
    PublicApiUpdateDatasetOwnerRequestDtoDict,
)
from .update_dataset_compute_warehouse_override_configuration_request_dto import (
    UpdateDatasetComputeWarehouseOverrideConfigurationRequestDto,
    UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoDict,
)
from .update_dataset_diagnostics_warehouse_configuration_request_dto import (
    UpdateDatasetDiagnosticsWarehouseConfigurationRequestDto,
    UpdateDatasetDiagnosticsWarehouseConfigurationRequestDtoDict,
)
from .update_dataset_metric_monitoring_configuration_request_dto import (
    UpdateDatasetMetricMonitoringConfigurationRequestDto,
    UpdateDatasetMetricMonitoringConfigurationRequestDtoDict,
)
from .update_dataset_profiling_configuration_request_dto import (
    UpdateDatasetProfilingConfigurationRequestDto,
    UpdateDatasetProfilingConfigurationRequestDtoDict,
)
from .update_dataset_time_partition_request_dto import (
    UpdateDatasetTimePartitionRequestDto,
    UpdateDatasetTimePartitionRequestDtoDict,
)


class PublicApiUpdateDatasetDto(SdkBaseModel):
    attributes: Optional[Any] = UNSET
    compute_warehouse_override: Optional[UpdateDatasetComputeWarehouseOverrideConfigurationRequestDto] = Field(
        default=UNSET, alias="computeWarehouseOverride"
    )
    diagnostics_warehouse: Optional[UpdateDatasetDiagnosticsWarehouseConfigurationRequestDto] = Field(
        default=UNSET, alias="diagnosticsWarehouse"
    )
    label: Optional[str] = UNSET
    metric_monitoring: Optional[UpdateDatasetMetricMonitoringConfigurationRequestDto] = Field(
        default=UNSET, alias="metricMonitoring"
    )
    owners: Optional[list[PublicApiUpdateDatasetOwnerRequestDto]] = UNSET
    partition_column: Optional[str] = Field(default=UNSET, alias="partitionColumn")
    profiling: Optional[UpdateDatasetProfilingConfigurationRequestDto] = UNSET
    tags: Optional[list[str]] = UNSET
    time_partition: Optional[UpdateDatasetTimePartitionRequestDto] = Field(default=UNSET, alias="timePartition")


class PublicApiUpdateDatasetDtoDict(TypedDict):
    attributes: NotRequired[Any]
    compute_warehouse_override: NotRequired[UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoDict]
    diagnostics_warehouse: NotRequired[UpdateDatasetDiagnosticsWarehouseConfigurationRequestDtoDict]
    label: NotRequired[str]
    metric_monitoring: NotRequired[UpdateDatasetMetricMonitoringConfigurationRequestDtoDict]
    owners: NotRequired[list[PublicApiUpdateDatasetOwnerRequestDtoDict]]
    partition_column: NotRequired[str]
    profiling: NotRequired[UpdateDatasetProfilingConfigurationRequestDtoDict]
    tags: NotRequired[list[str]]
    time_partition: NotRequired[UpdateDatasetTimePartitionRequestDtoDict]
