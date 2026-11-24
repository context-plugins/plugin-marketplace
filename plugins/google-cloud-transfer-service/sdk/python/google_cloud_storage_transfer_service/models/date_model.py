from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DateModel(SdkBaseModel):
    """Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either
    specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of
    the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for
    example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day
    (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime *
    google.protobuf.Timestamp"""

    day: Optional[int] = UNSET
    """Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year
    and month where the day isn't significant."""

    month: Optional[int] = UNSET
    """Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day."""

    year: Optional[int] = UNSET
    """Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year."""


class DateModelDict(TypedDict):
    day: NotRequired[int]
    month: NotRequired[int]
    year: NotRequired[int]
