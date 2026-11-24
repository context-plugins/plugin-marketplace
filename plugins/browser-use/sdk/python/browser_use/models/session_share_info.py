from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class SessionShareInfo(SdkBaseModel):
    """A session's public share-link state (share modal reads/writes this)."""

    id: UUID
    share_token: str = Field(alias="shareToken")
    session_id: UUID = Field(alias="sessionId")
    is_active: bool = Field(alias="isActive")
    view_count: int = Field(alias="viewCount")
    created_at: RFC3339DateTime = Field(alias="createdAt")
    share_url: str = Field(alias="shareUrl")


class SessionShareInfoDict(TypedDict):
    id: UUID
    share_token: str
    session_id: UUID
    is_active: bool
    view_count: int
    created_at: RFC3339DateTime
    share_url: str
