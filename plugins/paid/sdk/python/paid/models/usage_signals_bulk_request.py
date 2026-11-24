from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .signal_reference_usage_api import SignalReferenceUsageApi, SignalReferenceUsageApiDict


class UsageSignalsBulkRequest(SdkBaseModel):
    signals: Optional[list[SignalReferenceUsageApi]] = UNSET


class UsageSignalsBulkRequestDict(TypedDict):
    signals: NotRequired[list[SignalReferenceUsageApiDict]]
