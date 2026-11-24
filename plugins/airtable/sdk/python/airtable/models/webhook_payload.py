from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .action_metadata import ActionMetadata, ActionMetadataDict
from .changed_tables_by_id import ChangedTablesById, ChangedTablesByIdDict


class WebhookPayload(SdkBaseModel):
    """A single webhook payload representing a batch of changes."""

    timestamp: Optional[RFC3339DateTime] = UNSET
    """The time when the payload was generated."""

    base_transaction_number: Optional[int] = Field(default=UNSET, alias="baseTransactionNumber")
    """The transaction number for this batch of changes."""

    payload_format: Optional[str] = Field(default=UNSET, alias="payloadFormat")
    """The format version of the payload."""

    action_metadata: Optional[ActionMetadata] = Field(default=UNSET, alias="actionMetadata")
    """Metadata about the action that triggered the webhook."""

    changed_tables_by_id: Optional[dict[str, ChangedTablesById]] = Field(default=UNSET, alias="changedTablesById")
    """A mapping of table IDs to their changes."""


class WebhookPayloadDict(TypedDict):
    timestamp: NotRequired[RFC3339DateTime]
    base_transaction_number: NotRequired[int]
    payload_format: NotRequired[str]
    action_metadata: NotRequired[ActionMetadataDict]
    changed_tables_by_id: NotRequired[dict[str, ChangedTablesByIdDict]]
