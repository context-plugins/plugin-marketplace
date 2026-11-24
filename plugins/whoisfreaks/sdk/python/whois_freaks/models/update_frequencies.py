from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .date_range_status import DateRangeStatus, DateRangeStatusDict


class UpdateFrequencies(SdkBaseModel):
    daily: Optional[DateRangeStatus] = UNSET
    weekly: Optional[DateRangeStatus] = UNSET
    monthly: Optional[DateRangeStatus] = UNSET


class UpdateFrequenciesDict(TypedDict):
    daily: NotRequired[DateRangeStatusDict]
    weekly: NotRequired[DateRangeStatusDict]
    monthly: NotRequired[DateRangeStatusDict]
