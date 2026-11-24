from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity_type_lusha_webhooks_api import EntityTypeLushaWebhooksApiOrStr


class Subscription2(SdkBaseModel):
    entity_id: str = Field(alias="entityId")
    entity_type: Optional[EntityTypeLushaWebhooksApiOrStr] = Field(default=UNSET, alias="entityType")
    signal_types: Optional[list[str]] = Field(default=UNSET, alias="signalTypes")
    name: Optional[str] = UNSET


class Subscription2Dict(TypedDict):
    entity_id: str
    entity_type: NotRequired[EntityTypeLushaWebhooksApiOrStr]
    signal_types: NotRequired[list[str]]
    name: NotRequired[str]
