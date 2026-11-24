from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1DraftsResponse(SdkBaseModel):
    id: UUID
    claim_url: str = Field(alias="claimUrl")
    expires_at: str = Field(alias="expiresAt")
    warnings: list[str]
    next: str
    """What to tell the person, in words."""


class ApiV1DraftsResponseDict(TypedDict):
    id: UUID
    claim_url: str
    expires_at: str
    warnings: list[str]
    next: str
