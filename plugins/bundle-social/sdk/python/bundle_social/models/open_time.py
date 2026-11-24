from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OpenTime(SdkBaseModel):
    hours: Optional[int] = UNSET
    minutes: Optional[int] = UNSET
    seconds: Optional[int] = UNSET
    nanos: Optional[int] = UNSET


class OpenTimeDict(TypedDict):
    hours: NotRequired[int]
    minutes: NotRequired[int]
    seconds: NotRequired[int]
    nanos: NotRequired[int]
