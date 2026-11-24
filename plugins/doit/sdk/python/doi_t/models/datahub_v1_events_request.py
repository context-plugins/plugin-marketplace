from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .event import Event, EventDict


class DatahubV1EventsRequest(SdkBaseModel):
    events: Optional[list[Event]] = UNSET


class DatahubV1EventsRequestDict(TypedDict):
    events: NotRequired[list[EventDict]]
