from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class RangeReportingReportsApi(SdkBaseModel):
    start_date: Optional[Date] = Field(default=UNSET, alias="startDate")
    """Start date of the analysis range"""

    end_date: Optional[Date] = Field(default=UNSET, alias="endDate")
    """End date of the analysis range"""

    duration: Optional[int] = UNSET
    """Duration of the analysis range in days"""


class RangeReportingReportsApiDict(TypedDict):
    start_date: NotRequired[Date]
    end_date: NotRequired[Date]
    duration: NotRequired[int]
