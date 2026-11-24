from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .signal import Signal, SignalDict


class BulkSignalsRequest(SdkBaseModel):
    signals: list[Signal]


class BulkSignalsRequestDict(TypedDict):
    signals: list[SignalDict]
