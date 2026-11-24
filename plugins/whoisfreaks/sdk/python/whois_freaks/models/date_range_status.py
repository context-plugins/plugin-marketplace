from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DateRangeStatus(SdkBaseModel):
    available_from: Optional[str] = UNSET
    last_update: Optional[str] = UNSET


class DateRangeStatusDict(TypedDict):
    available_from: NotRequired[str]
    last_update: NotRequired[str]
