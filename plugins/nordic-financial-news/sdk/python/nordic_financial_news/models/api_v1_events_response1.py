from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .event_detail import EventDetail, EventDetailDict


class ApiV1EventsResponse1(SdkBaseModel):
    event: EventDetail


class ApiV1EventsResponse1Dict(TypedDict):
    event: EventDetailDict
