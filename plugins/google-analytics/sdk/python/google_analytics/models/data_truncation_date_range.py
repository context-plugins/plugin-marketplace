from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DataTruncationDateRange(SdkBaseModel):
    """Define the truncated date range from start_date to end_date."""

    end_date: Optional[str] = Field(default=UNSET, alias="endDate")
    """The end date in the format YYYY-MM-DD (inclusive)."""

    start_date: Optional[str] = Field(default=UNSET, alias="startDate")
    """The start date in the format YYYY-MM-DD (inclusive)."""


class DataTruncationDateRangeDict(TypedDict):
    end_date: NotRequired[str]
    start_date: NotRequired[str]
