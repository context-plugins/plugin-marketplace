from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .async_operation_error import AsyncOperationError, AsyncOperationErrorDict
from .enums.status_doi_t_reports_api import StatusDoiTReportsApiOrStr


class AsyncOperationPollResponse(SdkBaseModel):
    """Response envelope for polling an async report operation. Does not include result data — once status is
    "succeeded", fetch the result from the operation's results endpoint."""

    operation_id: str = Field(alias="operationId")
    """Unique identifier for the operation."""

    status: StatusDoiTReportsApiOrStr
    """Current lifecycle status of the operation."""

    create_time: RFC3339DateTime = Field(alias="createTime")
    """Time the operation was created."""

    expire_by: RFC3339DateTime = Field(alias="expireBy")
    """Time after which the operation record may be deleted."""

    error: Optional[AsyncOperationError] = UNSET
    """Error describing why an async operation failed. Present only when status is "failed"."""


class AsyncOperationPollResponseDict(TypedDict):
    operation_id: str
    status: StatusDoiTReportsApiOrStr
    create_time: RFC3339DateTime
    expire_by: RFC3339DateTime
    error: NotRequired[AsyncOperationErrorDict]
