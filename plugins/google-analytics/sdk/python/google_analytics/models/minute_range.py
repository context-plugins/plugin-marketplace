from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MinuteRange(SdkBaseModel):
    """A contiguous set of minutes: ``startMinutesAgo``, ``startMinutesAgo + 1``, ..., ``endMinutesAgo``. Requests are
    allowed up to 2 minute ranges."""

    start_minutes_ago: Optional[int] = Field(default=UNSET, alias="startMinutesAgo")
    """The inclusive start minute for the query as a number of minutes before now. For example, ``"startMinutesAgo":
    29`` specifies the report should include event data from 29 minutes ago and after. Cannot be after
    ``endMinutesAgo``. If unspecified, ``startMinutesAgo`` is defaulted to 29. Standard Analytics properties can request
    up to the last 30 minutes of event data (``startMinutesAgo <= 29``), and 360 Analytics properties can request up to
    the last 60 minutes of event data (``startMinutesAgo <= 59``)."""

    end_minutes_ago: Optional[int] = Field(default=UNSET, alias="endMinutesAgo")
    """The inclusive end minute for the query as a number of minutes before now. Cannot be before ``startMinutesAgo``.
    For example, ``"endMinutesAgo": 15`` specifies the report should include event data from prior to 15 minutes ago. If
    unspecified, ``endMinutesAgo`` is defaulted to 0. Standard Analytics properties can request any minute in the last
    30 minutes of event data (``endMinutesAgo <= 29``), and 360 Analytics properties can request any minute in the last
    60 minutes of event data (``endMinutesAgo <= 59``)."""

    name: Optional[str] = UNSET
    """Assigns a name to this minute range. The dimension ``dateRange`` is valued to this name in a report response. If
    set, cannot begin with ``date_range_`` or ``RESERVED_``. If not set, minute ranges are named by their zero based
    index in the request: ``date_range_0``, ``date_range_1``, etc."""


class MinuteRangeDict(TypedDict):
    start_minutes_ago: NotRequired[int]
    end_minutes_ago: NotRequired[int]
    name: NotRequired[str]
