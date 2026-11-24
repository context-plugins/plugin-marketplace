from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateOptOutSubscriptionRequest(SdkBaseModel):
    """Request body for creating an opt-out webhook subscription"""

    entity_type: Literal["contact"] = Field(default="contact", alias="entityType")
    """Entity type for opt-out subscriptions. Currently only ``contact`` is supported."""

    url: str
    """Your webhook endpoint URL (HTTPS required in production)"""

    name: Optional[str] = UNSET
    """Descriptive name for this subscription"""


class CreateOptOutSubscriptionRequestDict(TypedDict):
    entity_type: Literal["contact"]
    url: str
    name: NotRequired[str]
