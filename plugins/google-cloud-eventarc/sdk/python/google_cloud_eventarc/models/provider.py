from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .event_type import EventType, EventTypeDict


class Provider(SdkBaseModel):
    """A representation of the Provider resource."""

    name: Optional[str] = UNSET
    """Output only. In ``projects/{project}/locations/{location}/providers/{provider_id}`` format."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Output only. Human friendly name for the Provider. For example "Cloud Storage"."""

    event_types: Optional[list[EventType]] = Field(default=UNSET, alias="eventTypes")
    """Output only. Event types for this provider."""


class ProviderDict(TypedDict):
    name: NotRequired[str]
    display_name: NotRequired[str]
    event_types: NotRequired[list[EventTypeDict]]
