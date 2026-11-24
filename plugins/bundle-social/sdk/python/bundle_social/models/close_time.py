from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CloseTime(SdkBaseModel):
    hours: Optional[int] = UNSET
    minutes: Optional[int] = UNSET
    seconds: Optional[int] = UNSET
    nanos: Optional[int] = UNSET


class CloseTimeDict(TypedDict):
    hours: NotRequired[int]
    minutes: NotRequired[int]
    seconds: NotRequired[int]
    nanos: NotRequired[int]
