from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class AppsDailyInstalls(SdkBaseModel):
    id: str
    date: Date
    ipd: int
    installs: Optional[int] = UNSET


class AppsDailyInstallsDict(TypedDict):
    id: str
    date: Date
    ipd: int
    installs: NotRequired[int]
