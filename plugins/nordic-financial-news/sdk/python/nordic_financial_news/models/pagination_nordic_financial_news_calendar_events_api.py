from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class PaginationNordicFinancialNewsCalendarEventsApi(SdkBaseModel):
    count: Optional[int] = UNSET
    next_cursor: OptionalNullable[str] = UNSET
    """Opaque cursor to fetch the next page. ``null`` when there are no more results."""


class PaginationNordicFinancialNewsCalendarEventsApiDict(TypedDict):
    count: NotRequired[int]
    next_cursor: NotRequired[str | None]
