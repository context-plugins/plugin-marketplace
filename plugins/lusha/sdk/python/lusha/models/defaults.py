from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity_type2 import EntityType2OrStr


class Defaults(SdkBaseModel):
    url: str
    """Webhook URL (HTTPS required in production)"""

    entity_type: Optional[EntityType2OrStr] = Field(default=UNSET, alias="entityType")
    """Default entity type for all subscriptions"""

    signal_types: Optional[list[str]] = Field(default=UNSET, alias="signalTypes")
    """Default signal types for all subscriptions"""


class DefaultsDict(TypedDict):
    url: str
    entity_type: NotRequired[EntityType2OrStr]
    signal_types: NotRequired[list[str]]
