from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RecentGate(SdkBaseModel):
    id: UUID
    action: str
    decision: str
    outcome: str | None
    created_at: str = Field(alias="createdAt")


class RecentGateDict(TypedDict):
    id: UUID
    action: str
    decision: str
    outcome: str | None
    created_at: str
