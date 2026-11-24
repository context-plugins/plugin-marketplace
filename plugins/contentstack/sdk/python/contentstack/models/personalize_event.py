from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class PersonalizeEvent(SdkBaseModel):
    """A custom event definition for tracking user actions."""

    uid: Optional[str] = UNSET
    """Unique identifier of the event."""

    name: Optional[str] = UNSET
    """Display name of the event."""

    key: Optional[str] = UNSET
    """Machine-readable event key used in SDK tracking calls."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the event was created."""


class PersonalizeEventDict(TypedDict):
    uid: NotRequired[str]
    name: NotRequired[str]
    key: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
