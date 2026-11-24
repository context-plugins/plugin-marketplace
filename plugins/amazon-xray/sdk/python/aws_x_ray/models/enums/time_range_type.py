from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TimeRangeType(str, Enum):
    """Query trace summaries by TraceId (trace start time), Event (trace update time), or Service (trace segment end
    time)."""

    TRACE_ID = "TraceId"
    EVENT = "Event"
    SERVICE = "Service"

    __str__ = str.__str__


TimeRangeTypeOrStr: TypeAlias = Annotated[TimeRangeType | str, open_enum_validator(TimeRangeType)]
