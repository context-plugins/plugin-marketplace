from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TimeOfDay1(SdkBaseModel):
    """The departure time used to calculate traffic impact, represented as google.type.TimeOfDay in local time zone.
    Currently traffic model is restricted to hour level resolution."""

    seconds: Optional[int] = UNSET
    """Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API
    may allow the value 60 if it allows leap-seconds."""

    minutes: Optional[int] = UNSET
    """Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59."""

    nanos: Optional[int] = UNSET
    """Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to
    999,999,999."""

    hours: Optional[int] = UNSET
    """Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to
    23. An API may choose to allow the value "24:00:00" for scenarios like business closing time."""


class TimeOfDay1Dict(TypedDict):
    seconds: NotRequired[int]
    minutes: NotRequired[int]
    nanos: NotRequired[int]
    hours: NotRequired[int]
