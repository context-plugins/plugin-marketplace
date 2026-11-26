from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.period_request import PeriodRequestOrStr


class InvoiceScheduleRequest(SdkBaseModel):
    """Schedule properties for a recurring Invoices."""

    period: Optional[PeriodRequestOrStr] = UNSET
    frequency: Optional[int] = UNSET
    """Invoice frequency per time ``period``.

    For example, if the time ``period`` is ``MONTHLY`` and ``frequency`` is ``3``, an invoice is generated once every 3
    months."""

    next_due_date: Optional[Date] = Field(default=UNSET, alias="nextDueDate")
    """Due date for the next invoice. This value is in the ``yyyy-MM-dd`` format."""

    end_date: Optional[Date] = Field(default=UNSET, alias="endDate")
    """End date for the recurring invoices schedule. Recurring invoices stop on the ``endDate``. This value is in the
    ``yyyy-MM-dd`` format."""

    days_in_advance: Optional[int] = Field(default=UNSET, alias="daysInAdvance")
    """Number of days before ``nextDueDate`` when the next invoice is generated. If the date has occurred in the past
    for one or more invoices, all those invoices are generated."""


class InvoiceScheduleRequestDict(TypedDict):
    period: NotRequired[PeriodRequestOrStr]
    frequency: NotRequired[int]
    next_due_date: NotRequired[Date]
    end_date: NotRequired[Date]
    days_in_advance: NotRequired[int]
