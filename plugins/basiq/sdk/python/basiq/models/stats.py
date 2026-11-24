from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .average_duration_ms import AverageDurationMs, AverageDurationMsDict


class Stats(SdkBaseModel):
    """InstitutionPerformanceStats response type for institution performance stats"""

    average_duration_ms: Optional[AverageDurationMs] = Field(default=UNSET, alias="averageDurationMs")
    """AverageDurationMs average connector duration in milliseconds per segments. When durations are not known for
    institution this field will be ``null``."""


class StatsDict(TypedDict):
    average_duration_ms: NotRequired[AverageDurationMsDict]
