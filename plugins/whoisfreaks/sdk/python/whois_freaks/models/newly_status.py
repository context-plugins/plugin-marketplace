from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .date_range_status import DateRangeStatus, DateRangeStatusDict


class NewlyStatus(SdkBaseModel):
    gtld: Optional[DateRangeStatus] = UNSET
    cctld: Optional[DateRangeStatus] = UNSET
    dns: Optional[DateRangeStatus] = UNSET
    cleaned_gtld: Optional[DateRangeStatus] = UNSET
    cleaned_cctld: Optional[DateRangeStatus] = UNSET


class NewlyStatusDict(TypedDict):
    gtld: NotRequired[DateRangeStatusDict]
    cctld: NotRequired[DateRangeStatusDict]
    dns: NotRequired[DateRangeStatusDict]
    cleaned_gtld: NotRequired[DateRangeStatusDict]
    cleaned_cctld: NotRequired[DateRangeStatusDict]
