from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Stats(SdkBaseModel):
    total: Optional[int] = UNSET
    processed: Optional[int] = UNSET
    sent: Optional[int] = UNSET
    signed: Optional[int] = UNSET
    errors: Optional[int] = UNSET
    pending: Optional[int] = UNSET


class StatsDict(TypedDict):
    total: NotRequired[int]
    processed: NotRequired[int]
    sent: NotRequired[int]
    signed: NotRequired[int]
    errors: NotRequired[int]
    pending: NotRequired[int]
