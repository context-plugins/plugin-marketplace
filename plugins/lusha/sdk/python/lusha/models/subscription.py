from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Subscription(SdkBaseModel):
    id: Optional[str] = UNSET
    entity_type: Optional[str] = Field(default=UNSET, alias="entityType")
    entity_id: Optional[str] = Field(default=UNSET, alias="entityId")
    name: Optional[str] = UNSET


class SubscriptionDict(TypedDict):
    id: NotRequired[str]
    entity_type: NotRequired[str]
    entity_id: NotRequired[str]
    name: NotRequired[str]
