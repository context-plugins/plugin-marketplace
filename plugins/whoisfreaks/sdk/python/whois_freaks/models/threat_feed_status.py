from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .date_range_status import DateRangeStatus, DateRangeStatusDict


class ThreatFeedStatus(SdkBaseModel):
    phishing: Optional[DateRangeStatus] = UNSET
    malware: Optional[DateRangeStatus] = UNSET
    spam: Optional[DateRangeStatus] = UNSET


class ThreatFeedStatusDict(TypedDict):
    phishing: NotRequired[DateRangeStatusDict]
    malware: NotRequired[DateRangeStatusDict]
    spam: NotRequired[DateRangeStatusDict]
