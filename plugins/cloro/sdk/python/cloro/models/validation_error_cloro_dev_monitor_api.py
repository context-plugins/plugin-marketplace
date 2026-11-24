from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error4_cloro_dev_monitor_api import Error4CloroDevMonitorApi, Error4CloroDevMonitorApiDict


class ValidationErrorCloroDevMonitorApi(SdkBaseModel):
    success: Optional[bool] = UNSET
    error: Optional[Error4CloroDevMonitorApi] = UNSET


class ValidationErrorCloroDevMonitorApiDict(TypedDict):
    success: NotRequired[bool]
    error: NotRequired[Error4CloroDevMonitorApiDict]
