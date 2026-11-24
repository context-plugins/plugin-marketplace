from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Date3(SdkBaseModel):
    """Required. The start date of a transfer. Date boundaries are determined relative to UTC time. If
    ``schedule_start_date`` and start_time_of_day are in the past relative to the job's creation time, the transfer
    starts the day after you schedule the transfer request. **Note:** When starting jobs at or near midnight UTC it is
    possible that a job starts later than expected. For example, if you send an outbound request on June 1 one
    millisecond prior to midnight UTC and the Storage Transfer Service server receives the request on June 2, then it
    creates a TransferJob with ``schedule_start_date`` set to June 2 and a ``start_time_of_day`` set to midnight UTC.
    The first scheduled TransferOperation takes place on June 3 at midnight UTC."""

    day: Optional[int] = UNSET
    """Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year
    and month where the day isn't significant."""

    month: Optional[int] = UNSET
    """Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day."""

    year: Optional[int] = UNSET
    """Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year."""


class Date3Dict(TypedDict):
    day: NotRequired[int]
    month: NotRequired[int]
    year: NotRequired[int]
