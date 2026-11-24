from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type2ParallelAiMonitorApi(str, Enum):
    """Type of monitor to create. ``event_stream`` monitors a search query for material changes; ``snapshot`` monitors a
    specific task run's output. Determines the expected shape of ``settings``."""

    EVENT_STREAM = "event_stream"
    SNAPSHOT = "snapshot"

    __str__ = str.__str__


Type2ParallelAiMonitorApiOrStr: TypeAlias = Annotated[
    Type2ParallelAiMonitorApi | str, open_enum_validator(Type2ParallelAiMonitorApi)
]
