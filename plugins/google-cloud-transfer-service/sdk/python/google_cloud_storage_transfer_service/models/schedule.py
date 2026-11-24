from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .date1 import Date1, Date1Dict
from .date3 import Date3, Date3Dict
from .time_of_day1 import TimeOfDay1, TimeOfDay1Dict
from .time_of_day2 import TimeOfDay2, TimeOfDay2Dict


class Schedule(SdkBaseModel):
    """Transfers can be scheduled to recur or to run just once."""

    schedule_start_date: Optional[Date3] = Field(default=UNSET, alias="scheduleStartDate")
    """Required. The start date of a transfer. Date boundaries are determined relative to UTC time. If
    ``schedule_start_date`` and start_time_of_day are in the past relative to the job's creation time, the transfer
    starts the day after you schedule the transfer request. **Note:** When starting jobs at or near midnight UTC it is
    possible that a job starts later than expected. For example, if you send an outbound request on June 1 one
    millisecond prior to midnight UTC and the Storage Transfer Service server receives the request on June 2, then it
    creates a TransferJob with ``schedule_start_date`` set to June 2 and a ``start_time_of_day`` set to midnight UTC.
    The first scheduled TransferOperation takes place on June 3 at midnight UTC."""

    repeat_interval: Optional[str] = Field(default=UNSET, alias="repeatInterval")
    """Interval between the start of each scheduled TransferOperation. If unspecified, the default value is 24 hours.
    This value may not be less than 1 hour."""

    end_time_of_day: Optional[TimeOfDay1] = Field(default=UNSET, alias="endTimeOfDay")
    """The time in UTC that no further transfer operations are scheduled. Combined with schedule_end_date,
    ``end_time_of_day`` specifies the end date and time for starting new transfer operations. This field must be greater
    than or equal to the timestamp corresponding to the combination of schedule_start_date and start_time_of_day, and is
    subject to the following: * If ``end_time_of_day`` is not set and ``schedule_end_date`` is set, then a default value
    of ``23:59:59`` is used for ``end_time_of_day``. * If ``end_time_of_day`` is set and ``schedule_end_date`` is not
    set, then INVALID_ARGUMENT is returned."""

    start_time_of_day: Optional[TimeOfDay2] = Field(default=UNSET, alias="startTimeOfDay")
    """The time in UTC that a transfer job is scheduled to run. Transfers may start later than this time. If
    ``start_time_of_day`` is not specified: * One-time transfers run immediately. * Recurring transfers run immediately,
    and each day at midnight UTC, through schedule_end_date. If ``start_time_of_day`` is specified: * One-time transfers
    run at the specified time. * Recurring transfers run at the specified time each day, through
    ``schedule_end_date``."""

    schedule_end_date: Optional[Date1] = Field(default=UNSET, alias="scheduleEndDate")
    """The last day a transfer runs. Date boundaries are determined relative to UTC time. A job runs once per 24 hours
    within the following guidelines: * If ``schedule_end_date`` and schedule_start_date are the same and in the future
    relative to UTC, the transfer is executed only one time. * If ``schedule_end_date`` is later than
    ``schedule_start_date`` and ``schedule_end_date`` is in the future relative to UTC, the job runs each day at
    start_time_of_day through ``schedule_end_date``."""


class ScheduleDict(TypedDict):
    schedule_start_date: NotRequired[Date3Dict]
    repeat_interval: NotRequired[str]
    end_time_of_day: NotRequired[TimeOfDay1Dict]
    start_time_of_day: NotRequired[TimeOfDay2Dict]
    schedule_end_date: NotRequired[Date1Dict]
