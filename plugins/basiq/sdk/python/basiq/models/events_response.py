from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_platform_events_api import DataPlatformEventsApi, DataPlatformEventsApiDict
from .links_platform_events_api import LinksPlatformEventsApi, LinksPlatformEventsApiDict


class EventsResponse(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    id: Optional[str] = UNSET
    created_date: Optional[str] = Field(default=UNSET, alias="createdDate")
    entity: Optional[str] = UNSET
    event_type: Optional[str] = Field(default=UNSET, alias="eventType")
    user_id: Optional[str] = Field(default=UNSET, alias="userId")
    data_ref: Optional[str] = Field(default=UNSET, alias="dataRef")
    data: Optional[DataPlatformEventsApi] = UNSET
    links: Optional[LinksPlatformEventsApi] = UNSET


class EventsResponseDict(TypedDict):
    type_: NotRequired[str]
    id: NotRequired[str]
    created_date: NotRequired[str]
    entity: NotRequired[str]
    event_type: NotRequired[str]
    user_id: NotRequired[str]
    data_ref: NotRequired[str]
    data: NotRequired[DataPlatformEventsApiDict]
    links: NotRequired[LinksPlatformEventsApiDict]
