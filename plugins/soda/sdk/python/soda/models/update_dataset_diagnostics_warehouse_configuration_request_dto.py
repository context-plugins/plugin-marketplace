from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dataset_diagnostics_warehouse_failed_rows_configuration_request import (
    DatasetDiagnosticsWarehouseFailedRowsConfigurationRequest,
    DatasetDiagnosticsWarehouseFailedRowsConfigurationRequestDict,
)
from .dataset_diagnostics_warehouse_scan_and_results_configuration_request import (
    DatasetDiagnosticsWarehouseScanAndResultsConfigurationRequest,
    DatasetDiagnosticsWarehouseScanAndResultsConfigurationRequestDict,
)


class UpdateDatasetDiagnosticsWarehouseConfigurationRequestDto(SdkBaseModel):
    failed_rows_configuration: Optional[DatasetDiagnosticsWarehouseFailedRowsConfigurationRequest] = Field(
        default=UNSET, alias="failedRowsConfiguration"
    )
    scan_and_results_configuration: Optional[DatasetDiagnosticsWarehouseScanAndResultsConfigurationRequest] = Field(
        default=UNSET, alias="scanAndResultsConfiguration"
    )
    schema_value: Optional[str] = Field(default=UNSET, alias="schema")


class UpdateDatasetDiagnosticsWarehouseConfigurationRequestDtoDict(TypedDict):
    failed_rows_configuration: NotRequired[DatasetDiagnosticsWarehouseFailedRowsConfigurationRequestDict]
    scan_and_results_configuration: NotRequired[DatasetDiagnosticsWarehouseScanAndResultsConfigurationRequestDict]
    schema_value: NotRequired[str]
