from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Details2CloroDevMonitorApi(SdkBaseModel):
    field: Optional[str] = UNSET
    message: Optional[str] = UNSET


class Details2CloroDevMonitorApiDict(TypedDict):
    field: NotRequired[str]
    message: NotRequired[str]
