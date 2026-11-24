from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data1_platform_events_api import Data1PlatformEventsApi, Data1PlatformEventsApiDict


class EventsTypes429Error(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    correlation_id: Optional[str] = Field(default=UNSET, alias="correlationId")
    data: Optional[list[Data1PlatformEventsApi]] = UNSET


class EventsTypes429ErrorDict(TypedDict):
    type_: NotRequired[str]
    correlation_id: NotRequired[str]
    data: NotRequired[list[Data1PlatformEventsApiDict]]
