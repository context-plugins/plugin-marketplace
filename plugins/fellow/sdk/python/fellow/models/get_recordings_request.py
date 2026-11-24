from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .media_url_config import MediaUrlConfig, MediaUrlConfigDict
from .paginated_request_params import PaginatedRequestParams, PaginatedRequestParamsDict
from .recording_filters import RecordingFilters, RecordingFiltersDict
from .recording_includable_expensive_field import (
    RecordingIncludableExpensiveField,
    RecordingIncludableExpensiveFieldDict,
)


class GetRecordingsRequest(SdkBaseModel):
    """Request body for getting recordings with optional filters and pagination."""

    pagination: Optional[PaginatedRequestParams] = UNSET
    include: Optional[RecordingIncludableExpensiveField] = UNSET
    filters: Optional[RecordingFilters] = UNSET
    media_url: Optional[MediaUrlConfig] = UNSET


class GetRecordingsRequestDict(TypedDict):
    pagination: NotRequired[PaginatedRequestParamsDict]
    include: NotRequired[RecordingIncludableExpensiveFieldDict]
    filters: NotRequired[RecordingFiltersDict]
    media_url: NotRequired[MediaUrlConfigDict]
