from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .dataset_diagnostics_warehouse_scan_and_results_configuration_request import (
    DatasetDiagnosticsWarehouseScanAndResultsConfigurationRequest,
    DatasetDiagnosticsWarehouseScanAndResultsConfigurationRequestDict,
)
from .public_api_dataset_diagnostics_warehouse_response_diagnostics_warehouse_failed_rows_configuration_dto import (
    PublicApiDatasetDiagnosticsWarehouseResponseDiagnosticsWarehouseFailedRowsConfigurationDto,
    PublicApiDatasetDiagnosticsWarehouseResponseDiagnosticsWarehouseFailedRowsConfigurationDtoDict,
)


class PublicApiDatasetDiagnosticsWarehouseResponse(SdkBaseModel):
    failed_rows_configuration: Optional[
        PublicApiDatasetDiagnosticsWarehouseResponseDiagnosticsWarehouseFailedRowsConfigurationDto
    ] = Field(default=UNSET, alias="failedRowsConfiguration")
    scan_and_results_configuration: Optional[DatasetDiagnosticsWarehouseScanAndResultsConfigurationRequest] = Field(
        default=UNSET, alias="scanAndResultsConfiguration"
    )
    schema_value: OptionalNullable[str] = Field(default=UNSET, alias="schema")


class PublicApiDatasetDiagnosticsWarehouseResponseDict(TypedDict):
    failed_rows_configuration: NotRequired[
        PublicApiDatasetDiagnosticsWarehouseResponseDiagnosticsWarehouseFailedRowsConfigurationDtoDict
    ]
    scan_and_results_configuration: NotRequired[DatasetDiagnosticsWarehouseScanAndResultsConfigurationRequestDict]
    schema_value: NotRequired[str | None]
