from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.event import EventOrStr


class WebhookCreate(SdkBaseModel):
    url: str
    events: Optional[list[EventOrStr]] = UNSET
    """Events to subscribe to. Omit to receive all four."""

    description: Optional[str] = UNSET


class WebhookCreateDict(TypedDict):
    url: str
    events: NotRequired[list[EventOrStr]]
    description: NotRequired[str]
