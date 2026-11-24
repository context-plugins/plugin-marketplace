from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .details_cloro_dev_monitor_api import DetailsCloroDevMonitorApi, DetailsCloroDevMonitorApiDict


class ErrorCloroDevMonitorApi(SdkBaseModel):
    code: Optional[str] = UNSET
    message: Optional[str] = UNSET
    details: Optional[DetailsCloroDevMonitorApi] = UNSET
    timestamp: Optional[RFC3339DateTime] = UNSET


class ErrorCloroDevMonitorApiDict(TypedDict):
    code: NotRequired[str]
    message: NotRequired[str]
    details: NotRequired[DetailsCloroDevMonitorApiDict]
    timestamp: NotRequired[RFC3339DateTime]
