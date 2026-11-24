from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.day_of_week import DayOfWeekOrStr
from .enums.month import MonthOrStr


class TimeAlignmentBoundary(SdkBaseModel):
    month: Optional[MonthOrStr] = Field(default=UNSET, alias="Month")
    """The month to use for time alignment during aggregation. The month must be in uppercase."""

    day_of_month: Optional[int] = Field(default=UNSET, alias="DayOfMonth")
    """The day of the month to use for time alignment during aggregation."""

    day_of_week: Optional[DayOfWeekOrStr] = Field(default=UNSET, alias="DayOfWeek")
    """The day of week to use for time alignment during aggregation. The day must be in uppercase."""

    hour: Optional[int] = Field(default=UNSET, alias="Hour")
    """The hour of day to use for time alignment during aggregation."""


class TimeAlignmentBoundaryDict(TypedDict):
    month: NotRequired[MonthOrStr]
    day_of_month: NotRequired[int]
    day_of_week: NotRequired[DayOfWeekOrStr]
    hour: NotRequired[int]
