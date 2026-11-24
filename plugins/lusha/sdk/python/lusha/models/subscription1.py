from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity_type3 import EntityType3OrStr


class Subscription1(SdkBaseModel):
    entity_id: str = Field(alias="entityId")
    """Entity ID (always required per item)"""

    entity_type: Optional[EntityType3OrStr] = Field(default=UNSET, alias="entityType")
    """Overrides default entityType"""

    signal_types: Optional[list[str]] = Field(default=UNSET, alias="signalTypes")
    """Overrides default signalTypes"""

    name: Optional[str] = UNSET
    """Overrides default name"""


class Subscription1Dict(TypedDict):
    entity_id: str
    entity_type: NotRequired[EntityType3OrStr]
    signal_types: NotRequired[list[str]]
    name: NotRequired[str]
