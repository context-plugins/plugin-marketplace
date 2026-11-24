from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DetailsCloroDevMonitorApi(SdkBaseModel):
    limit: Optional[float] = UNSET


class DetailsCloroDevMonitorApiDict(TypedDict):
    limit: NotRequired[float]
