from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleTypeTimeOfDay(SdkBaseModel):
    """Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API
    may choose to allow leap seconds. Related types are google.type.Date and ``google.protobuf.Timestamp``."""

    hours: Optional[int] = UNSET
    """Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to
    23. An API may choose to allow the value "24:00:00" for scenarios like business closing time."""

    nanos: Optional[int] = UNSET
    """Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to
    999,999,999."""

    minutes: Optional[int] = UNSET
    """Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59."""

    seconds: Optional[int] = UNSET
    """Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API
    may allow the value 60 if it allows leap-seconds."""


class GoogleTypeTimeOfDayDict(TypedDict):
    hours: NotRequired[int]
    nanos: NotRequired[int]
    minutes: NotRequired[int]
    seconds: NotRequired[int]
