from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error1_cloro_dev_monitor_api import Error1CloroDevMonitorApi, Error1CloroDevMonitorApiDict


class ForbiddenErrorCloroDevMonitorApi(SdkBaseModel):
    success: Optional[bool] = UNSET
    error: Optional[Error1CloroDevMonitorApi] = UNSET


class ForbiddenErrorCloroDevMonitorApiDict(TypedDict):
    success: NotRequired[bool]
    error: NotRequired[Error1CloroDevMonitorApiDict]
