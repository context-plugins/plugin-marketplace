from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.scope import ScopeOrStr


class ByokCredentialItem(SdkBaseModel):
    id: UUID
    provider_id: int
    provider_name: str
    name: str
    scope: ScopeOrStr
    masked_value: str
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime


class ByokCredentialItemDict(TypedDict):
    id: UUID
    provider_id: int
    provider_name: str
    name: str
    scope: ScopeOrStr
    masked_value: str
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
