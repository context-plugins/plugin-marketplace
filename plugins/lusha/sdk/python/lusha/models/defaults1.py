from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity_type_lusha_webhooks_api import EntityTypeLushaWebhooksApiOrStr


class Defaults1(SdkBaseModel):
    url: str
    entity_type: Optional[EntityTypeLushaWebhooksApiOrStr] = Field(default=UNSET, alias="entityType")
    signal_types: Optional[list[str]] = Field(default=UNSET, alias="signalTypes")
    """Default signal types for all subscriptions. Available signals depend on entity type. Please refer to the Signal
    Options endpoint for a full list of available signals."""


class Defaults1Dict(TypedDict):
    url: str
    entity_type: NotRequired[EntityTypeLushaWebhooksApiOrStr]
    signal_types: NotRequired[list[str]]
