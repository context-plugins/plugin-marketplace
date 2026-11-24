from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Details1CloroDevMonitorApi(SdkBaseModel):
    service: Optional[str] = UNSET


class Details1CloroDevMonitorApiDict(TypedDict):
    service: NotRequired[str]
