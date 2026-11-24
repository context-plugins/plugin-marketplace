from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CountBySeverity(SdkBaseModel):
    """Count of matching anomalies per severity level. All three keys are always present, with zero counts included."""

    information: int
    warning: int
    critical: int


class CountBySeverityDict(TypedDict):
    information: int
    warning: int
    critical: int
