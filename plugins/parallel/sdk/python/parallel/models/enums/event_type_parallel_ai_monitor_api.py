from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EventTypeParallelAiMonitorApi(str, Enum):
    """Discriminant for the event_stream event variant."""

    EVENT_STREAM = "event_stream"

    __str__ = str.__str__


EventTypeParallelAiMonitorApiOrStr: TypeAlias = Annotated[
    EventTypeParallelAiMonitorApi | str, open_enum_validator(EventTypeParallelAiMonitorApi)
]
