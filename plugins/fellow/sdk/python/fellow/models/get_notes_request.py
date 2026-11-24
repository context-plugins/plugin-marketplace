from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .note_filters import NoteFilters, NoteFiltersDict
from .note_includable_expensive_field import NoteIncludableExpensiveField, NoteIncludableExpensiveFieldDict
from .paginated_request_params import PaginatedRequestParams, PaginatedRequestParamsDict


class GetNotesRequest(SdkBaseModel):
    """Request body for getting notes with optional filters and pagination."""

    pagination: Optional[PaginatedRequestParams] = UNSET
    include: Optional[NoteIncludableExpensiveField] = UNSET
    filters: Optional[NoteFilters] = UNSET


class GetNotesRequestDict(TypedDict):
    pagination: NotRequired[PaginatedRequestParamsDict]
    include: NotRequired[NoteIncludableExpensiveFieldDict]
    filters: NotRequired[NoteFiltersDict]
