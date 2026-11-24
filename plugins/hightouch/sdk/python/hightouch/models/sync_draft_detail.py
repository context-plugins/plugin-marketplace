from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.operation import OperationOrStr
from .enums.sync_draft_status import SyncDraftStatusOrStr
from .related_draft import RelatedDraft, RelatedDraftDict
from .review_metadata import ReviewMetadata, ReviewMetadataDict
from .sync import Sync, SyncDict
from .user_reference import UserReference, UserReferenceDict


class SyncDraftDetail(SdkBaseModel):
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

    current: Sync
    """The sync as it is now, or null for a draft that creates the sync"""

    proposed: Sync
    """The sync as it will be after approval, or null once the draft is closed"""

    changed_fields: list[str] = Field(alias="changedFields")
    """The top-level sync fields that the draft changes"""

    draft_version: str = Field(alias="draftVersion")
    """Send as ``expectedDraftVersion`` to approve exactly this version of the draft"""

    resource_version: str = Field(alias="resourceVersion")
    """Send as ``expectedResourceVersion`` to approve only if the sync has not changed"""

    related_drafts: list[RelatedDraft] = Field(alias="relatedDrafts")


class SyncDraftDetailDict(TypedDict):
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
    current: SyncDict
    proposed: SyncDict
    changed_fields: list[str]
    draft_version: str
    resource_version: str
    related_drafts: list[RelatedDraftDict]
