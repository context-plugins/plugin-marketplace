from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .details2_cloro_dev_monitor_api import Details2CloroDevMonitorApi, Details2CloroDevMonitorApiDict


class Error4CloroDevMonitorApi(SdkBaseModel):
    code: Optional[str] = UNSET
    message: Optional[str] = UNSET
    details: Optional[list[Details2CloroDevMonitorApi]] = UNSET
    """One entry per invalid field. Sent on request-body validation errors."""

    timestamp: Optional[RFC3339DateTime] = UNSET


class Error4CloroDevMonitorApiDict(TypedDict):
    code: NotRequired[str]
    message: NotRequired[str]
    details: NotRequired[list[Details2CloroDevMonitorApiDict]]
    timestamp: NotRequired[RFC3339DateTime]
