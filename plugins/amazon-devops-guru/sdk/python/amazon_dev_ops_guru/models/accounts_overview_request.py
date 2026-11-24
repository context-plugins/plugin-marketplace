from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class AccountsOverviewRequest(SdkBaseModel):
    from_time: RFC3339DateTime = Field(alias="FromTime")
    """The start of the time range passed in. The start time granularity is at the day level. The floor of the start
    time is used. Returned information occurred after this day."""

    to_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="ToTime")
    """The end of the time range passed in. The start time granularity is at the day level. The floor of the start time
    is used. Returned information occurred before this day. If this is not specified, then the current day is used."""


class AccountsOverviewRequestDict(TypedDict):
    from_time: RFC3339DateTime
    to_time: NotRequired[RFC3339DateTime]
