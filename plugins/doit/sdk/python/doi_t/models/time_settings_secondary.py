from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_time_range import CustomTimeRange, CustomTimeRangeDict
from .enums.unit1 import Unit1OrStr


class TimeSettingsSecondary(SdkBaseModel):
    """Secondary time range for comparative reports."""

    amount: Optional[int] = UNSET
    """Number of periods to shift back."""

    include_current: Optional[bool] = Field(default=UNSET, alias="includeCurrent")
    """Whether to align to complete previous periods (full year/quarter/month) vs shifting dates by amount.
        When ``true``, selects complete periods (e.g., full previous year Jan 1-Dec 31, not up to today).
        When ``false``, shifts dates by amount, which may result in partial periods extending to today."""

    unit: Optional[Unit1OrStr] = UNSET
    """Time interval unit for shifting."""

    custom_time_range: Optional[CustomTimeRange] = Field(default=UNSET, alias="customTimeRange")
    """Custom date range for the secondary time range."""


class TimeSettingsSecondaryDict(TypedDict):
    amount: NotRequired[int]
    include_current: NotRequired[bool]
    unit: NotRequired[Unit1OrStr]
    custom_time_range: NotRequired[CustomTimeRangeDict]
