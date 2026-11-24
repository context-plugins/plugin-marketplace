from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .personalize_event import PersonalizeEvent, PersonalizeEventDict


class EventList(SdkBaseModel):
    """A list of custom event definitions."""

    data: Optional[list[PersonalizeEvent]] = UNSET
    """Array of event objects."""


class EventListDict(TypedDict):
    data: NotRequired[list[PersonalizeEventDict]]
