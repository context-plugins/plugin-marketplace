from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SamplingRateBoost(SdkBaseModel):
    max_rate: float = Field(alias="MaxRate")
    """Defines max temporary sampling rate to apply when a boost is triggered. Calculated boost rate by X-Ray will be
    less than or equal to this max rate."""

    cooldown_window_minutes: int = Field(alias="CooldownWindowMinutes")
    """Sets the time window (in minutes) in which only one sampling rate boost can be triggered. After a boost occurs,
    no further boosts are allowed until the next window."""


class SamplingRateBoostDict(TypedDict):
    max_rate: float
    cooldown_window_minutes: int
