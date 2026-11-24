from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .event_summary import EventSummary, EventSummaryDict
from .pagination import Pagination, PaginationDict


class ApiV1CompaniesEventsResponse(SdkBaseModel):
    events: list[EventSummary]
    pagination: Pagination
    plan_limited: Optional[bool] = UNSET
    """Present and ``true`` when your plan capped what this endpoint can return. Absent when your plan applies no
    cap."""


class ApiV1CompaniesEventsResponseDict(TypedDict):
    events: list[EventSummaryDict]
    pagination: PaginationDict
    plan_limited: NotRequired[bool]
