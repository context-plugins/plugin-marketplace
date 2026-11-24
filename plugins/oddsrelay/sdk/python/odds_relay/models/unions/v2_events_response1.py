from __future__ import annotations

from typing import TypeAlias

from ..event import Event, EventDict
from ..v2_events_response import V2EventsResponse, V2EventsResponseDict

V2EventsResponse1: TypeAlias = V2EventsResponse | list[Event]

V2EventsResponse1Dict: TypeAlias = V2EventsResponseDict | list[EventDict]
