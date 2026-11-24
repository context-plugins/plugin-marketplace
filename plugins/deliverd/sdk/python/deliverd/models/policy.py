from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Policy(SdkBaseModel):
    id: UUID
    name: str
    description: str | None
    enabled: bool
    active_version: float | None = Field(alias="activeVersion")
    active_version_id: UUID | None = Field(alias="activeVersionId")
    versions: float
    created_at: str = Field(alias="createdAt")


class PolicyDict(TypedDict):
    id: UUID
    name: str
    description: str | None
    enabled: bool
    active_version: float | None
    active_version_id: UUID | None
    versions: float
    created_at: str
