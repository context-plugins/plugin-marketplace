from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.latest_snapshot1 import LatestSnapshot1, LatestSnapshot1Dict


class MonitorSnapshotOutput(SdkBaseModel):
    """Runtime output state for a ``snapshot`` monitor."""

    latest_snapshot: Optional[LatestSnapshot1] = UNSET
    """Task run output from the most recent completed execution of this snapshot monitor — same structure as the output
    of the original task run the monitor was created from. ``null`` until the first run completes."""


class MonitorSnapshotOutputDict(TypedDict):
    latest_snapshot: NotRequired[LatestSnapshot1Dict]
