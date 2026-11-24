from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error3_cloro_dev_monitor_api import Error3CloroDevMonitorApi, Error3CloroDevMonitorApiDict


class AuthenticationErrorCloroDevMonitorApi(SdkBaseModel):
    success: Optional[bool] = UNSET
    error: Optional[Error3CloroDevMonitorApi] = UNSET


class AuthenticationErrorCloroDevMonitorApiDict(TypedDict):
    success: NotRequired[bool]
    error: NotRequired[Error3CloroDevMonitorApiDict]
