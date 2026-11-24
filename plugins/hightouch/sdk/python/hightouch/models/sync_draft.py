from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.operation import OperationOrStr
from .enums.sync_draft_status import SyncDraftStatusOrStr
from .review_metadata import ReviewMetadata, ReviewMetadataDict
from .user_reference import UserReference, UserReferenceDict


class SyncDraft(SdkBaseModel):
    """A proposed change to a sync that waits for approval. Approving it applies the change; rejecting it closes it
    without applying anything."""

    model_config = ConfigDict(extra="forbid")

    id: str
    """The draft's id"""

    sync_id: str = Field(alias="syncId")
    """The id of the sync the draft changes"""

    operation: OperationOrStr
    """``create`` publishes a new sync, ``update`` changes an existing one"""

    status: SyncDraftStatusOrStr
    """The state of a sync draft. New values may be added, so treat an unknown value as closed."""

    requested_by: UserReference = Field(alias="requestedBy")
    """The user who submitted the draft"""

    requested_approvers: list[UserReference] = Field(alias="requestedApprovers")
    """The users asked to review the draft"""

    request_comment: str | None = Field(alias="requestComment")
    """The comment the requester left for reviewers"""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """The timestamp when the draft was created"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """The timestamp when the draft last changed"""

    reviewed_by: UserReference = Field(alias="reviewedBy")
    """The user who approved or rejected the draft. With an API key, this is the user who owns the key."""

    reviewed_at: RFC3339DateTime | None = Field(alias="reviewedAt")
    """The timestamp when the draft was approved or rejected"""

    review_metadata: ReviewMetadata | None = Field(alias="reviewMetadata")
    """The metadata sent with the approval or rejection"""


class SyncDraftDict(TypedDict):
    id: str
    sync_id: str
    operation: OperationOrStr
    status: SyncDraftStatusOrStr
    requested_by: UserReferenceDict
    requested_approvers: list[UserReferenceDict]
    request_comment: str | None
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    reviewed_by: UserReferenceDict
    reviewed_at: RFC3339DateTime | None
    review_metadata: ReviewMetadataDict | None
