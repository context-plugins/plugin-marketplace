from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.segment_status import SegmentStatusOrStr


class KillSwitchSegmentData(SdkBaseModel):
    segment: Optional[str] = UNSET
    segment_status: Optional[SegmentStatusOrStr] = UNSET
    kill_switch_enabled: Optional[bool] = UNSET


class KillSwitchSegmentDataDict(TypedDict):
    segment: NotRequired[str]
    segment_status: NotRequired[SegmentStatusOrStr]
    kill_switch_enabled: NotRequired[bool]
