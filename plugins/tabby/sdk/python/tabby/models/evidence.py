from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Evidence(SdkBaseModel):
    id: UUID
    """Evidence ID."""

    dispute_id: UUID
    """Dispute ID."""

    content: str
    """Evidence content."""

    created_by: str
    """Who created the evidence."""

    created_at: RFC3339DateTime
    """Creation timestamp in UTC, ISO 8601 datetime format."""

    attachment_ids: Optional[list[UUID]] = UNSET
    """Array of attachment IDs."""


class EvidenceDict(TypedDict):
    id: UUID
    dispute_id: UUID
    content: str
    created_by: str
    created_at: RFC3339DateTime
    attachment_ids: NotRequired[list[UUID]]
