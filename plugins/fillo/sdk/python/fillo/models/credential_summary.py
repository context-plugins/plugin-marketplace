from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class CredentialSummary(SdkBaseModel):
    """Metadata for one stored credential. Bearers are stored as hashes and can never be listed."""

    id: str
    name: str
    created_at: RFC3339DateTime = Field(alias="createdAt")
    last_used_at: RFC3339DateTime | None = Field(alias="lastUsedAt")
    expires_at: RFC3339DateTime | None = Field(alias="expiresAt")


class CredentialSummaryDict(TypedDict):
    id: str
    name: str
    created_at: RFC3339DateTime
    last_used_at: RFC3339DateTime | None
    expires_at: RFC3339DateTime | None
