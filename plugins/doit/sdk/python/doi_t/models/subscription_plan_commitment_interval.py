from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SubscriptionPlanCommitmentInterval(SdkBaseModel):
    """The start and end dates of an annual commitment term."""

    end_time: Optional[int] = Field(default=UNSET, alias="endTime")
    """The end time of the commitment interval, in milliseconds since the epoch."""

    start_time: Optional[int] = Field(default=UNSET, alias="startTime")
    """The start time of the commitment interval, in milliseconds since the epoch."""


class SubscriptionPlanCommitmentIntervalDict(TypedDict):
    end_time: NotRequired[int]
    start_time: NotRequired[int]
