from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DatasetDiagnosticsWarehouseScanAndResultsConfigurationRequest(SdkBaseModel):
    enabled: Optional[bool] = UNSET


class DatasetDiagnosticsWarehouseScanAndResultsConfigurationRequestDict(TypedDict):
    enabled: NotRequired[bool]
