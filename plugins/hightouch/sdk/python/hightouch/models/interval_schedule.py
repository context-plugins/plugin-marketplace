from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .interval import Interval, IntervalDict


class IntervalSchedule(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    interval: Interval


class IntervalScheduleDict(TypedDict):
    interval: IntervalDict
