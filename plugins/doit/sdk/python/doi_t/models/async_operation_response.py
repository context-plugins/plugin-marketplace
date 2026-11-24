from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status1_doi_t_reports_api import Status1DoiTReportsApiOrStr


class AsyncOperationResponse(SdkBaseModel):
    """Response envelope for an async report operation. Returned on 202 (new operation) and 200 (dry-run). On dry-run,
    operationId is absent and status is "dry_run"."""

    operation_id: Optional[str] = Field(default=UNSET, alias="operationId")
    """Unique identifier for the operation. Absent on dry-run responses."""

    status: Optional[Status1DoiTReportsApiOrStr] = UNSET
    """Current lifecycle status of the operation."""

    create_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createTime")
    """Time the operation was created (absent on dry-run)."""


class AsyncOperationResponseDict(TypedDict):
    operation_id: NotRequired[str]
    status: NotRequired[Status1DoiTReportsApiOrStr]
    create_time: NotRequired[RFC3339DateTime]
