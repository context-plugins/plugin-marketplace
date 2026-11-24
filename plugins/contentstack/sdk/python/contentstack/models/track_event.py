from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TrackEvent(SdkBaseModel):
    """A single event to be tracked for the user."""

    event_key: str = Field(alias="eventKey")
    """The key of the event to track. Use "impression" for automatic view tracking or a custom event key defined in the
    Personalize Management API."""

    experience_uid: Optional[str] = UNSET
    """The UID of the experience associated with this event. Required for impression events."""

    variant_uid: Optional[str] = UNSET
    """The UID of the variant shown to the user. Required for impression events."""


class TrackEventDict(TypedDict):
    event_key: str
    experience_uid: NotRequired[str]
    variant_uid: NotRequired[str]
