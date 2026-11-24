from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.code1_cloro_dev_monitor_api import Code1CloroDevMonitorApiOrStr


class Error3CloroDevMonitorApi(SdkBaseModel):
    code: Optional[Code1CloroDevMonitorApiOrStr] = UNSET
    message: Optional[str] = UNSET
    timestamp: Optional[RFC3339DateTime] = UNSET


class Error3CloroDevMonitorApiDict(TypedDict):
    code: NotRequired[Code1CloroDevMonitorApiOrStr]
    message: NotRequired[str]
    timestamp: NotRequired[RFC3339DateTime]
