from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class OptOutSubscriptionResponse(SdkBaseModel):
    """Response body returned when an opt-out subscription is created successfully"""

    id: str
    entity_type: Literal["contact"] = Field(default="contact", alias="entityType")
    entity_id: str = Field(alias="entityId")
    signal_types: list[str] = Field(alias="signalTypes")
    url: str
    name: Optional[str] = UNSET
    is_active: bool = Field(alias="isActive")
    created_at: RFC3339DateTime = Field(alias="createdAt")
    updated_at: RFC3339DateTime = Field(alias="updatedAt")


class OptOutSubscriptionResponseDict(TypedDict):
    id: str
    entity_type: Literal["contact"]
    entity_id: str
    signal_types: list[str]
    url: str
    name: NotRequired[str]
    is_active: bool
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
