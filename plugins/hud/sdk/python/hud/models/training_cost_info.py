from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TrainingCostInfo(SdkBaseModel):
    total_cost: float
    hourly_rate: float
    runtime_seconds: float


class TrainingCostInfoDict(TypedDict):
    total_cost: float
    hourly_rate: float
    runtime_seconds: float
