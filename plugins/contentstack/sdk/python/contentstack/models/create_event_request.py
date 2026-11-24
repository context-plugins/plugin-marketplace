from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CreateEventRequest(SdkBaseModel):
    """Parameters for creating an event."""

    name: str
    """Display name for the event."""

    key: str
    """Machine-readable key for SDK tracking calls."""


class CreateEventRequestDict(TypedDict):
    name: str
    key: str
