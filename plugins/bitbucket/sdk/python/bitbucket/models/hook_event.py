from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.event1 import Event1OrStr


class HookEvent(SdkBaseModel):
    """An event, associated with a resource or subject type."""

    model_config = ConfigDict(extra="forbid")

    event: Optional[Event1OrStr] = UNSET
    """The event identifier."""

    category: Optional[str] = UNSET
    """The category this event belongs to."""

    label: Optional[str] = UNSET
    """Summary of the webhook event type."""

    description: Optional[str] = UNSET
    """More detailed description of the webhook event type."""


class HookEventDict(TypedDict):
    event: NotRequired[Event1OrStr]
    category: NotRequired[str]
    label: NotRequired[str]
    description: NotRequired[str]
