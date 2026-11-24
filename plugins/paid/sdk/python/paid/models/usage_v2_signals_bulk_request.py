from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .signal_v2 import SignalV2, SignalV2Dict


class UsageV2SignalsBulkRequest(SdkBaseModel):
    signals: Optional[list[SignalV2]] = UNSET


class UsageV2SignalsBulkRequestDict(TypedDict):
    signals: NotRequired[list[SignalV2Dict]]
