from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .update_dataset_compute_warehouse_override_configuration_request_dto_warehouse_configuration_dto import (
    UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDto,
    UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDtoDict,
)


class DatasetComputeWarehouseConfigurationDto(SdkBaseModel):
    available_warehouses: Optional[
        list[UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDto]
    ] = Field(default=UNSET, alias="availableWarehouses")
    current_warehouse: Optional[
        UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDto
    ] = Field(default=UNSET, alias="currentWarehouse")
    dataset_warehouse_override: Optional[
        UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDto
    ] = Field(default=UNSET, alias="datasetWarehouseOverride")
    default_warehouse: Optional[
        UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDto
    ] = Field(default=UNSET, alias="defaultWarehouse")
    enabled: Optional[bool] = UNSET


class DatasetComputeWarehouseConfigurationDtoDict(TypedDict):
    available_warehouses: NotRequired[
        list[UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDtoDict]
    ]
    current_warehouse: NotRequired[
        UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDtoDict
    ]
    dataset_warehouse_override: NotRequired[
        UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDtoDict
    ]
    default_warehouse: NotRequired[
        UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDtoDict
    ]
    enabled: NotRequired[bool]
