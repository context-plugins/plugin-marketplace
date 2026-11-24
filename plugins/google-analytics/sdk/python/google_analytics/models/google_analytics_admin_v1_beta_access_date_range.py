from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaAccessDateRange(SdkBaseModel):
    """A contiguous range of days: startDate, startDate + 1, ..., endDate."""

    start_date: Optional[str] = Field(default=UNSET, alias="startDate")
    """The inclusive start date for the query in the format ``YYYY-MM-DD``. Cannot be after ``endDate``. The format
    ``NdaysAgo``, ``yesterday``, or ``today`` is also accepted, and in that case, the date is inferred based on the
    current time in the request's time zone."""

    end_date: Optional[str] = Field(default=UNSET, alias="endDate")
    """The inclusive end date for the query in the format ``YYYY-MM-DD``. Cannot be before ``startDate``. The format
    ``NdaysAgo``, ``yesterday``, or ``today`` is also accepted, and in that case, the date is inferred based on the
    current time in the request's time zone."""


class GoogleAnalyticsAdminV1BetaAccessDateRangeDict(TypedDict):
    start_date: NotRequired[str]
    end_date: NotRequired[str]
