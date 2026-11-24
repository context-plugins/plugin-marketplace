from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicApiDatasourceDiagnosticsWarehouseResponseScanAndResultsConfigurationDto(SdkBaseModel):
    enabled: Optional[bool] = UNSET


class PublicApiDatasourceDiagnosticsWarehouseResponseScanAndResultsConfigurationDtoDict(TypedDict):
    enabled: NotRequired[bool]
