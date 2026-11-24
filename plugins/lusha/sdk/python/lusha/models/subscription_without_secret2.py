from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.entity_type_lusha_webhooks_api import EntityTypeLushaWebhooksApiOrStr


class SubscriptionWithoutSecret2(SdkBaseModel):
    id: str
    entity_type: EntityTypeLushaWebhooksApiOrStr = Field(alias="entityType")
    entity_id: str = Field(alias="entityId")
    signal_types: list[str] = Field(alias="signalTypes")
    url: str
    name: Optional[str] = UNSET
    is_active: bool = Field(alias="isActive")
    block_reason: OptionalNullable[str] = Field(default=UNSET, alias="blockReason")
    blocked_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="blockedAt")
    created_at: RFC3339DateTime = Field(alias="createdAt")
    updated_at: RFC3339DateTime = Field(alias="updatedAt")


class SubscriptionWithoutSecret2Dict(TypedDict):
    id: str
    entity_type: EntityTypeLushaWebhooksApiOrStr
    entity_id: str
    signal_types: list[str]
    url: str
    name: NotRequired[str]
    is_active: bool
    block_reason: NotRequired[str | None]
    blocked_at: NotRequired[RFC3339DateTime | None]
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
