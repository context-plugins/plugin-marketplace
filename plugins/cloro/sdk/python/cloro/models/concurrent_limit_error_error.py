from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error_cloro_dev_monitor_api import ErrorCloroDevMonitorApi, ErrorCloroDevMonitorApiDict


class ConcurrentLimitErrorError(SdkBaseModel):
    success: Optional[bool] = UNSET
    error: Optional[ErrorCloroDevMonitorApi] = UNSET


class ConcurrentLimitErrorErrorDict(TypedDict):
    success: NotRequired[bool]
    error: NotRequired[ErrorCloroDevMonitorApiDict]
