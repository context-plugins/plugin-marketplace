from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .update_dataset_compute_warehouse_override_configuration_request_dto_warehouse_configuration_dto import (
    UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDto,
    UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDtoDict,
)


class UpdateDatasetComputeWarehouseOverrideConfigurationRequestDto(SdkBaseModel):
    compute_warehouse_configuration: Optional[
        UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDto
    ] = Field(default=UNSET, alias="computeWarehouseConfiguration")
    enabled: Optional[bool] = UNSET


class UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoDict(TypedDict):
    compute_warehouse_configuration: NotRequired[
        UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDtoDict
    ]
    enabled: NotRequired[bool]
