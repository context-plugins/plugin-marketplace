from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.hiring_by_department import HiringByDepartmentOrStr
from .enums.news_event_type import NewsEventTypeOrStr
from .signal_filter_location import SignalFilterLocation, SignalFilterLocationDict


class CompanySignalFiltersInclude(SdkBaseModel):
    """Optional sub-filters to narrow results within a signal type.
    - Multi-value filters use **OR** logic
    - Filter values are **not** case-sensitive
    - ``state`` without ``country`` in ``hiringByLocations`` returns HTTP **400**"""

    news_event_types: Optional[list[NewsEventTypeOrStr]] = Field(default=UNSET, alias="newsEventTypes")
    hiring_by_departments: Optional[list[HiringByDepartmentOrStr]] = Field(default=UNSET, alias="hiringByDepartments")
    hiring_by_locations: Optional[list[SignalFilterLocation]] = Field(default=UNSET, alias="hiringByLocations")


class CompanySignalFiltersIncludeDict(TypedDict):
    news_event_types: NotRequired[list[NewsEventTypeOrStr]]
    hiring_by_departments: NotRequired[list[HiringByDepartmentOrStr]]
    hiring_by_locations: NotRequired[list[SignalFilterLocationDict]]
