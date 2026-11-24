from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DateRange(SdkBaseModel):
    """A contiguous set of days: ``startDate``, ``startDate + 1``, ..., ``endDate``. Requests are allowed up to 4 date
    ranges."""

    start_date: Optional[str] = Field(default=UNSET, alias="startDate")
    """The inclusive start date for the query in the format ``YYYY-MM-DD``. Cannot be after ``end_date``. The format
    ``NdaysAgo``, ``yesterday``, or ``today`` is also accepted, and in that case, the date is inferred based on the
    property's reporting time zone."""

    end_date: Optional[str] = Field(default=UNSET, alias="endDate")
    """The inclusive end date for the query in the format ``YYYY-MM-DD``. Cannot be before ``start_date``. The format
    ``NdaysAgo``, ``yesterday``, or ``today`` is also accepted, and in that case, the date is inferred based on the
    property's reporting time zone."""

    name: Optional[str] = UNSET
    """Assigns a name to this date range. The dimension ``dateRange`` is valued to this name in a report response. If
    set, cannot begin with ``date_range_`` or ``RESERVED_``. If not set, date ranges are named by their zero based index
    in the request: ``date_range_0``, ``date_range_1``, etc."""


class DateRangeDict(TypedDict):
    start_date: NotRequired[str]
    end_date: NotRequired[str]
    name: NotRequired[str]
