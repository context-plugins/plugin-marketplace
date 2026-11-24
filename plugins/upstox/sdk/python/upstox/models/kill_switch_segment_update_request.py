from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.action import ActionOrStr
from .enums.segment import SegmentOrStr


class KillSwitchSegmentUpdateRequest(SdkBaseModel):
    segment: SegmentOrStr
    action: ActionOrStr


class KillSwitchSegmentUpdateRequestDict(TypedDict):
    segment: SegmentOrStr
    action: ActionOrStr
