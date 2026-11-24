from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDto(SdkBaseModel):
    name: str


class UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDtoDict(TypedDict):
    name: str
