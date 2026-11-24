from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicApiDatasetDiagnosticsWarehouseResponseDiagnosticsWarehouseScanAndResultsConfigurationDto(SdkBaseModel):
    enabled: Optional[bool] = UNSET


class PublicApiDatasetDiagnosticsWarehouseResponseDiagnosticsWarehouseScanAndResultsConfigurationDtoDict(TypedDict):
    enabled: NotRequired[bool]
