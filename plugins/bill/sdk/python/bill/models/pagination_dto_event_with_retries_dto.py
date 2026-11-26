from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .event_with_retries_dto import EventWithRetriesDto, EventWithRetriesDtoDict


class PaginationDtoEventWithRetriesDto(SdkBaseModel):
    """Pagination information."""

    next_page: Optional[str] = Field(default=UNSET, alias="nextPage")
    results: Optional[list[EventWithRetriesDto]] = UNSET


class PaginationDtoEventWithRetriesDtoDict(TypedDict):
    next_page: NotRequired[str]
    results: NotRequired[list[EventWithRetriesDtoDict]]
