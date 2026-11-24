from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .datum_platform_events_api import DatumPlatformEventsApi, DatumPlatformEventsApiDict
from .resource_link import ResourceLink, ResourceLinkDict


class EventsGetResponseResource(SdkBaseModel):
    """Object containing details for connections."""

    type_: str = Field(alias="type")
    """Type, always "list"."""

    data: Optional[list[DatumPlatformEventsApi]] = UNSET
    links: Optional[ResourceLink] = UNSET
    """Link object containing a link to the resource, self reference."""


class EventsGetResponseResourceDict(TypedDict):
    type_: str
    data: NotRequired[list[DatumPlatformEventsApiDict]]
    links: NotRequired[ResourceLinkDict]
