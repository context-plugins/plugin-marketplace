from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.status import StatusOrStr


class IdentificationEvidenceStatusResponse(SdkBaseModel):
    id: Optional[int] = UNSET
    """Internal ID of the evidence record."""

    transaction_code: Optional[str] = Field(default=UNSET, alias="transactionCode")
    """Unique transaction code for the identification process."""

    account_id: Optional[int] = Field(default=UNSET, alias="accountId")
    """Internal account ID associated with the identification."""

    workflow_id: Optional[int] = Field(default=UNSET, alias="workflowId")
    """Internal workflow ID used for the identification process."""

    status: Optional[StatusOrStr] = UNSET
    """Current status of the identification process."""

    pending_review: OptionalNullable[str] = Field(default=UNSET, alias="pendingReview")
    """Present if the identification is pending manual review, otherwise null."""

    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    """Timestamp when the identification was created."""

    expires_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="expiresAt")
    """Timestamp when the identification evidence expires."""

    started_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startedAt")
    """Timestamp when the identification process was started by the signer."""

    completed_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="completedAt")
    """Timestamp when the identification process was completed. Null if not yet completed."""

    reviewed_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="reviewedAt")
    """Timestamp when the identification was reviewed. Null if not reviewed."""


class IdentificationEvidenceStatusResponseDict(TypedDict):
    id: NotRequired[int]
    transaction_code: NotRequired[str]
    account_id: NotRequired[int]
    workflow_id: NotRequired[int]
    status: NotRequired[StatusOrStr]
    pending_review: NotRequired[str | None]
    created_at: NotRequired[RFC3339DateTime]
    expires_at: NotRequired[RFC3339DateTime]
    started_at: NotRequired[RFC3339DateTime]
    completed_at: NotRequired[RFC3339DateTime | None]
    reviewed_at: NotRequired[RFC3339DateTime | None]
