from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .special_hour_period import SpecialHourPeriod, SpecialHourPeriodDict


class SpecialHours(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    special_hour_periods: Optional[list[SpecialHourPeriod]] = Field(default=UNSET, alias="specialHourPeriods")


class SpecialHoursDict(TypedDict):
    special_hour_periods: NotRequired[list[SpecialHourPeriodDict]]
