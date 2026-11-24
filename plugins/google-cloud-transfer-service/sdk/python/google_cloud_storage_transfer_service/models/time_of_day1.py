from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TimeOfDay1(SdkBaseModel):
    """The time in UTC that no further transfer operations are scheduled. Combined with schedule_end_date,
    ``end_time_of_day`` specifies the end date and time for starting new transfer operations. This field must be greater
    than or equal to the timestamp corresponding to the combination of schedule_start_date and start_time_of_day, and is
    subject to the following: * If ``end_time_of_day`` is not set and ``schedule_end_date`` is set, then a default value
    of ``23:59:59`` is used for ``end_time_of_day``. * If ``end_time_of_day`` is set and ``schedule_end_date`` is not
    set, then INVALID_ARGUMENT is returned."""

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


class TimeOfDay1Dict(TypedDict):
    minutes: NotRequired[int]
    hours: NotRequired[int]
    seconds: NotRequired[int]
    nanos: NotRequired[int]
