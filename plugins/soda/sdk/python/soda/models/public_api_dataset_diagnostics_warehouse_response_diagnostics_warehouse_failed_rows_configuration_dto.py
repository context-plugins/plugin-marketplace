from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.diagnostics_warehouse_failed_rows_storage_strategy_dto import (
    DiagnosticsWarehouseFailedRowsStorageStrategyDtoOrStr,
)
from .enums.failed_rows_configuration_state_dto import FailedRowsConfigurationStateDtoOrStr
from .failed_row_samples_dto import FailedRowSamplesDto, FailedRowSamplesDtoDict
from .failed_rows_collection_strategy_dto import FailedRowsCollectionStrategyDto, FailedRowsCollectionStrategyDtoDict


class PublicApiDatasetDiagnosticsWarehouseResponseDiagnosticsWarehouseFailedRowsConfigurationDto(SdkBaseModel):
    enabled: Optional[bool] = UNSET
    failed_row_samples: Optional[FailedRowSamplesDto] = Field(default=UNSET, alias="failedRowSamples")
    failed_rows_collection_strategy: Optional[FailedRowsCollectionStrategyDto] = Field(
        default=UNSET, alias="failedRowsCollectionStrategy"
    )
    max_row_count: Optional[int] = Field(default=UNSET, alias="maxRowCount")
    state: Optional[FailedRowsConfigurationStateDtoOrStr] = UNSET
    storage_strategy: Optional[DiagnosticsWarehouseFailedRowsStorageStrategyDtoOrStr] = Field(
        default=UNSET, alias="storageStrategy"
    )
    unique_key_column_names: Optional[list[str]] = Field(default=UNSET, alias="uniqueKeyColumnNames")


class PublicApiDatasetDiagnosticsWarehouseResponseDiagnosticsWarehouseFailedRowsConfigurationDtoDict(TypedDict):
    enabled: NotRequired[bool]
    failed_row_samples: NotRequired[FailedRowSamplesDtoDict]
    failed_rows_collection_strategy: NotRequired[FailedRowsCollectionStrategyDtoDict]
    max_row_count: NotRequired[int]
    state: NotRequired[FailedRowsConfigurationStateDtoOrStr]
    storage_strategy: NotRequired[DiagnosticsWarehouseFailedRowsStorageStrategyDtoOrStr]
    unique_key_column_names: NotRequired[list[str]]
