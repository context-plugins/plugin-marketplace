from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.interval_unit import IntervalUnitOrStr


class Interval(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    unit: IntervalUnitOrStr
    quantity: float


class IntervalDict(TypedDict):
    unit: IntervalUnitOrStr
    quantity: float
