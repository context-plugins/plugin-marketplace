from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .details1_cloro_dev_monitor_api import Details1CloroDevMonitorApi, Details1CloroDevMonitorApiDict


class Error2CloroDevMonitorApi(SdkBaseModel):
    code: Optional[str] = UNSET
    message: Optional[str] = UNSET
    details: Optional[Details1CloroDevMonitorApi] = UNSET
    timestamp: Optional[RFC3339DateTime] = UNSET


class Error2CloroDevMonitorApiDict(TypedDict):
    code: NotRequired[str]
    message: NotRequired[str]
    details: NotRequired[Details1CloroDevMonitorApiDict]
    timestamp: NotRequired[RFC3339DateTime]
