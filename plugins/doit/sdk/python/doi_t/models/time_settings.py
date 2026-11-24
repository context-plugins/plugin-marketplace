from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.mode2 import Mode2OrStr
from .enums.unit import UnitOrStr


class TimeSettings(SdkBaseModel):
    """Specify a predefined or custom time range for the report. For example, to specify a custom time range of "last 2
    days", set the mode to ``last``, the amount to ``2``, and the unit to ``day``. If ``includeCurrent`` is ``true``,
    the range will be yesterday and today; otherwise, the range will be yesterday and the day before yesterday. If
    "custom" type is specified, you need to provide a custom time range in the ``customTimeRange`` field."""

    amount: Optional[int] = UNSET
    """Number of time units to include in the time range."""

    include_current: Optional[bool] = Field(default=UNSET, alias="includeCurrent")
    """Whether to include the current time period."""

    mode: Optional[Mode2OrStr] = UNSET
    """Time range mode (last N periods, current period, or custom)."""

    unit: Optional[UnitOrStr] = UNSET
    """Time unit for the time range."""


class TimeSettingsDict(TypedDict):
    amount: NotRequired[int]
    include_current: NotRequired[bool]
    mode: NotRequired[Mode2OrStr]
    unit: NotRequired[UnitOrStr]
