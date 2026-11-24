from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DateRange2(SdkBaseModel):
    """The cohort selects users whose first touch date is between start date and end date defined in the ``dateRange``.
    This ``dateRange`` does not specify the full date range of event data that is present in a cohort report. In a
    cohort report, this ``dateRange`` is extended by the granularity and offset present in the ``cohortsRange``; event
    data for the extended reporting date range is present in a cohort report. In a cohort request, this ``dateRange`` is
    required and the ``dateRanges`` in the ``RunReportRequest`` or ``RunPivotReportRequest`` must be unspecified. This
    ``dateRange`` should generally be aligned with the cohort's granularity. If ``CohortsRange`` uses daily granularity,
    this ``dateRange`` can be a single day. If ``CohortsRange`` uses weekly granularity, this ``dateRange`` can be
    aligned to a week boundary, starting at Sunday and ending Saturday. If ``CohortsRange`` uses monthly granularity,
    this ``dateRange`` can be aligned to a month, starting at the first and ending on the last day of the month."""

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


class DateRange2Dict(TypedDict):
    start_date: NotRequired[str]
    end_date: NotRequired[str]
    name: NotRequired[str]
