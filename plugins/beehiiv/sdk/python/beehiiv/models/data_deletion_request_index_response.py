from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_deletion_request_info import DataDeletionRequestInfo, DataDeletionRequestInfoDict


class DataDeletionRequestIndexResponse(SdkBaseModel):
    data: Optional[list[DataDeletionRequestInfo]] = UNSET
    limit: Optional[int] = UNSET
    """The limit placed on the results. If no limit was specified in the request, this defaults to 10."""

    has_more: Optional[bool] = UNSET
    """Whether there are more results available after this page."""

    next_cursor: Optional[str] = UNSET
    """The cursor to use for the next page of results."""


class DataDeletionRequestIndexResponseDict(TypedDict):
    data: NotRequired[list[DataDeletionRequestInfoDict]]
    limit: NotRequired[int]
    has_more: NotRequired[bool]
    next_cursor: NotRequired[str]
