from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.data_deletion_request_source import DataDeletionRequestSourceOrStr
from .enums.data_deletion_request_status import DataDeletionRequestStatusOrStr


class DataDeletionRequestInfo(SdkBaseModel):
    id: Optional[str] = UNSET
    email: Optional[str] = UNSET
    status: Optional[DataDeletionRequestStatusOrStr] = UNSET
    """The current status of the data deletion request."""

    source: Optional[DataDeletionRequestSourceOrStr] = UNSET
    """The source from which the deletion request was created."""

    requested_at: Optional[str] = UNSET
    scheduled_for_processing_at: Optional[str] = UNSET
    completed_at: Optional[str] = UNSET
    created_at: Optional[str] = UNSET


class DataDeletionRequestInfoDict(TypedDict):
    id: NotRequired[str]
    email: NotRequired[str]
    status: NotRequired[DataDeletionRequestStatusOrStr]
    source: NotRequired[DataDeletionRequestSourceOrStr]
    requested_at: NotRequired[str]
    scheduled_for_processing_at: NotRequired[str]
    completed_at: NotRequired[str]
    created_at: NotRequired[str]
