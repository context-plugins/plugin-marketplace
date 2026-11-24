from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TimeOfDay2(SdkBaseModel):
    """The time in UTC that a transfer job is scheduled to run. Transfers may start later than this time. If
    ``start_time_of_day`` is not specified: * One-time transfers run immediately. * Recurring transfers run immediately,
    and each day at midnight UTC, through schedule_end_date. If ``start_time_of_day`` is specified: * One-time transfers
    run at the specified time. * Recurring transfers run at the specified time each day, through
    ``schedule_end_date``."""

    minutes: Optional[int] = UNSET
    """Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59."""

    hours: Optional[int] = UNSET
    """Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to
    23. An API may choose to allow the value "24:00:00" for scenarios like business closing time."""

    seconds: Optional[int] = UNSET
    """Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API
    may allow the value 60 if it allows leap-seconds."""

    nanos: Optional[int] = UNSET
    """Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to
    999,999,999."""


class TimeOfDay2Dict(TypedDict):
    minutes: NotRequired[int]
    hours: NotRequired[int]
    seconds: NotRequired[int]
    nanos: NotRequired[int]
