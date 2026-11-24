from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .kill_switch_segment_data import KillSwitchSegmentData, KillSwitchSegmentDataDict


class KillSwitchResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[KillSwitchSegmentData]] = UNSET


class KillSwitchResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[KillSwitchSegmentDataDict]]
