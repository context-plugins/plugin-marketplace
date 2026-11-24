from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .event_type_summary import EventTypeSummary, EventTypeSummaryDict
from .pagination import Pagination, PaginationDict


class ApiV1EventTypesResponse(SdkBaseModel):
    event_types: list[EventTypeSummary]
    pagination: Optional[Pagination] = UNSET


class ApiV1EventTypesResponseDict(TypedDict):
    event_types: list[EventTypeSummaryDict]
    pagination: NotRequired[PaginationDict]
