from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.period_response import PeriodResponseOrStr


class Schedule1BillV3RecurringbillsApi(SdkBaseModel):
    period: Optional[PeriodResponseOrStr] = UNSET
    frequency: Optional[int] = UNSET
    """Bill frequency per time ``period``.

    For example, if the time ``period`` is ``MONTHLY`` and ``frequency`` is ``3``, a bill is generated once every 3
    months."""

    next_due_date: Optional[Date] = Field(default=UNSET, alias="nextDueDate")
    """Due date for the next bill. This value is in the ``yyyy-MM-dd`` format."""

    end_date: Optional[Date] = Field(default=UNSET, alias="endDate")
    """End date for the recurring bills schedule. Recurring bills stop on the ``endDate``. This value is in the
    ``yyyy-MM-dd`` format."""

    days_in_advance: Optional[int] = Field(default=UNSET, alias="daysInAdvance")
    """Number of days before ``nextDueDate`` when the next bill is generated. If the date has occurred in the past for
    one or more bills, all those bills are generated."""


class Schedule1BillV3RecurringbillsApiDict(TypedDict):
    period: NotRequired[PeriodResponseOrStr]
    frequency: NotRequired[int]
    next_due_date: NotRequired[Date]
    end_date: NotRequired[Date]
    days_in_advance: NotRequired[int]
