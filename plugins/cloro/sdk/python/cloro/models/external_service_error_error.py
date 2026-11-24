from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error2_cloro_dev_monitor_api import Error2CloroDevMonitorApi, Error2CloroDevMonitorApiDict


class ExternalServiceErrorError(SdkBaseModel):
    success: Optional[bool] = UNSET
    error: Optional[Error2CloroDevMonitorApi] = UNSET


class ExternalServiceErrorErrorDict(TypedDict):
    success: NotRequired[bool]
    error: NotRequired[Error2CloroDevMonitorApiDict]
