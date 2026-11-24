from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .public_api_update_datasource_diagnostics_warehouse_request_dto_failed_rows_configuration_request_dto import (
    PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoFailedRowsConfigurationRequestDto,
    PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoFailedRowsConfigurationRequestDtoDict,
)
from .public_api_update_datasource_diagnostics_warehouse_request_dto_scan_and_results_configuration_request_dto import (
    PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoScanAndResultsConfigurationRequestDto,
    PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoScanAndResultsConfigurationRequestDtoDict,
)


class PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto(SdkBaseModel):
    configuration_file_contents: Optional[str] = Field(default=UNSET, alias="configurationFileContents")
    enabled: Optional[bool] = UNSET
    failed_rows_configuration: Optional[
        PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoFailedRowsConfigurationRequestDto
    ] = Field(default=UNSET, alias="failedRowsConfiguration")
    reuse_datasource: Optional[bool] = Field(default=UNSET, alias="reuseDatasource")
    scan_and_results_configuration: Optional[
        PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoScanAndResultsConfigurationRequestDto
    ] = Field(default=UNSET, alias="scanAndResultsConfiguration")
    table_name_template: Optional[str] = Field(default=UNSET, alias="tableNameTemplate")


class PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoDict(TypedDict):
    configuration_file_contents: NotRequired[str]
    enabled: NotRequired[bool]
    failed_rows_configuration: NotRequired[
        PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoFailedRowsConfigurationRequestDtoDict
    ]
    reuse_datasource: NotRequired[bool]
    scan_and_results_configuration: NotRequired[
        PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoScanAndResultsConfigurationRequestDtoDict
    ]
    table_name_template: NotRequired[str]
