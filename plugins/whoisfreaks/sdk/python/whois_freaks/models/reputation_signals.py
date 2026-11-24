from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .reputation_signal import ReputationSignal, ReputationSignalDict


class ReputationSignals(SdkBaseModel):
    positive: Optional[list[ReputationSignal]] = UNSET
    negative: Optional[list[ReputationSignal]] = UNSET
    neutral: Optional[list[ReputationSignal]] = UNSET


class ReputationSignalsDict(TypedDict):
    positive: NotRequired[list[ReputationSignalDict]]
    negative: NotRequired[list[ReputationSignalDict]]
    neutral: NotRequired[list[ReputationSignalDict]]
