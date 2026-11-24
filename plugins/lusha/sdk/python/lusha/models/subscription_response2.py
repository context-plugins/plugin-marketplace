from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.entity_type_lusha_webhooks_api import EntityTypeLushaWebhooksApiOrStr


class SubscriptionResponse2(SdkBaseModel):
    id: Optional[str] = UNSET
    entity_type: Optional[EntityTypeLushaWebhooksApiOrStr] = Field(default=UNSET, alias="entityType")
    entity_id: Optional[str] = Field(default=UNSET, alias="entityId")
    signal_types: Optional[list[str]] = Field(default=UNSET, alias="signalTypes")
    url: Optional[str] = UNSET
    name: Optional[str] = UNSET
    is_active: Optional[bool] = Field(default=UNSET, alias="isActive")
    secret: Optional[str] = UNSET
    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")


class SubscriptionResponse2Dict(TypedDict):
    id: NotRequired[str]
    entity_type: NotRequired[EntityTypeLushaWebhooksApiOrStr]
    entity_id: NotRequired[str]
    signal_types: NotRequired[list[str]]
    url: NotRequired[str]
    name: NotRequired[str]
    is_active: NotRequired[bool]
    secret: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
