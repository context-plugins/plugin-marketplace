from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .location2 import Location2, Location2Dict


class CommuteInfo1(SdkBaseModel):
    """Commute information which is generated based on specified CommuteFilter."""

    job_location: Optional[Location2] = Field(default=UNSET, alias="jobLocation")
    """Location used as the destination in the commute calculation."""

    travel_duration: Optional[str] = Field(default=UNSET, alias="travelDuration")
    """The number of seconds required to travel to the job location from the query location. A duration of 0 seconds
    indicates that the job isn't reachable within the requested duration, but was returned as part of an expanded
    query."""


class CommuteInfo1Dict(TypedDict):
    job_location: NotRequired[Location2Dict]
    travel_duration: NotRequired[str]
