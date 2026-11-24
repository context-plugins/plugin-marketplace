from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1PingerRequest(SdkBaseModel):
    host: str
    """The host name or public IP that you want to ping"""

    timeout: Optional[int] = UNSET
    """The timeout for the ping request in milliseconds"""

    round_trips: Optional[int] = Field(default=UNSET, alias="roundTrips")
    """How many pings to send before averaging the round-trip time"""


class V1PingerRequestDict(TypedDict):
    host: str
    timeout: NotRequired[int]
    round_trips: NotRequired[int]
