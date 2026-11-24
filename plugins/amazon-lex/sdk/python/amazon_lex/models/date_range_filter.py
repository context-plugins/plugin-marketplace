from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class DateRangeFilter(SdkBaseModel):
    start_date_time: RFC3339DateTime = Field(alias="startDateTime")
    """A timestamp indicating the start date for the date range filter."""

    end_date_time: RFC3339DateTime = Field(alias="endDateTime")
    """A timestamp indicating the end date for the date range filter."""


class DateRangeFilterDict(TypedDict):
    start_date_time: RFC3339DateTime
    end_date_time: RFC3339DateTime
