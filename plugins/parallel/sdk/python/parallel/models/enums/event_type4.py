from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EventType4(str, Enum):
    MONITOR_EVENT_DETECTED = "monitor.event.detected"
    MONITOR_EXECUTION_COMPLETED = "monitor.execution.completed"
    MONITOR_EXECUTION_FAILED = "monitor.execution.failed"

    __str__ = str.__str__


EventType4OrStr: TypeAlias = Annotated[EventType4 | str, open_enum_validator(EventType4)]
