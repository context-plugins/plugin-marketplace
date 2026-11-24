from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .paginated_request_params import PaginatedRequestParams, PaginatedRequestParamsDict
from .upload_filters import UploadFilters, UploadFiltersDict


class GetUploadsRequest(SdkBaseModel):
    """Request body for listing API-uploaded recordings with optional filters and pagination."""

    pagination: Optional[PaginatedRequestParams] = UNSET
    filters: Optional[UploadFilters] = UNSET


class GetUploadsRequestDict(TypedDict):
    pagination: NotRequired[PaginatedRequestParamsDict]
    filters: NotRequired[UploadFiltersDict]
