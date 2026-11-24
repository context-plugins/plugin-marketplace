from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.batch_import_status import BatchImportStatusOrInt


class BatchMessageStatus(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    company_user_guid: OptionalNullable[str] = Field(default=UNSET, alias="companyUserGuid")
    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")
    batch_id: OptionalNullable[str] = Field(default=UNSET, alias="batchId")
    status: Optional[BatchImportStatusOrInt] = UNSET
    """0 = None 1 = Awaiting 3 = Pending 5 = Failed 6 = HandledDuplicated 7 = Succeed"""

    message_id: OptionalNullable[str] = Field(default=UNSET, alias="messageId")
    failed_reason: OptionalNullable[str] = Field(default=UNSET, alias="failedReason")
    payload: OptionalNullable[str] = UNSET
    retry_count: Optional[int] = Field(default=UNSET, alias="retryCount")
    document_serial: OptionalNullable[str] = Field(default=UNSET, alias="documentSerial")
    sql_id: Optional[int] = Field(default=UNSET, alias="sqlId")
    row_index: Optional[int] = Field(default=UNSET, alias="rowIndex")


class BatchMessageStatusDict(TypedDict):
    company_user_guid: NotRequired[str | None]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
    batch_id: NotRequired[str | None]
    status: NotRequired[BatchImportStatusOrInt]
    message_id: NotRequired[str | None]
    failed_reason: NotRequired[str | None]
    payload: NotRequired[str | None]
    retry_count: NotRequired[int]
    document_serial: NotRequired[str | None]
    sql_id: NotRequired[int]
    row_index: NotRequired[int]
