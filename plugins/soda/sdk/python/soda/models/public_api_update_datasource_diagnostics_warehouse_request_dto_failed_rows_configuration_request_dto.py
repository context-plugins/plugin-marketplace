from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .failed_row_samples_dto import FailedRowSamplesDto, FailedRowSamplesDtoDict
from .failed_rows_collection_strategy_dto import FailedRowsCollectionStrategyDto, FailedRowsCollectionStrategyDtoDict
from .public_api_update_datasource_diagnostics_warehouse_request_dto_action_button_request_dto import (
    PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoActionButtonRequestDto,
    PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoActionButtonRequestDtoDict,
)


class PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoFailedRowsConfigurationRequestDto(SdkBaseModel):
    action_button: Optional[PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoActionButtonRequestDto] = Field(
        default=UNSET, alias="actionButton"
    )
    enabled: Optional[bool] = UNSET
    expose_queries: Optional[bool] = Field(default=UNSET, alias="exposeQueries")
    failed_row_samples: Optional[FailedRowSamplesDto] = Field(default=UNSET, alias="failedRowSamples")
    failed_rows_collection_strategy: Optional[FailedRowsCollectionStrategyDto] = Field(
        default=UNSET, alias="failedRowsCollectionStrategy"
    )
    location_message: Optional[str] = Field(default=UNSET, alias="locationMessage")
    max_row_count: Optional[int] = Field(default=UNSET, alias="maxRowCount")


class PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoFailedRowsConfigurationRequestDtoDict(TypedDict):
    action_button: NotRequired[PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoActionButtonRequestDtoDict]
    enabled: NotRequired[bool]
    expose_queries: NotRequired[bool]
    failed_row_samples: NotRequired[FailedRowSamplesDtoDict]
    failed_rows_collection_strategy: NotRequired[FailedRowsCollectionStrategyDtoDict]
    location_message: NotRequired[str]
    max_row_count: NotRequired[int]
