from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RateLimiterStatus(SdkBaseModel):
    max_allowed: Optional[int] = Field(default=UNSET, alias="maxAllowed")
    """The maximum number of rate limiters allowed on the connection."""

    in_use: Optional[int] = Field(default=UNSET, alias="inUse")
    """The number of rate limiters currently in use on the connection."""

    remaining: Optional[int] = UNSET
    """The number of rate limiters remaining (available) on the connection."""

    total_bandwidth: Optional[str] = Field(default=UNSET, alias="totalBandwidth")
    """The total bandwidth allocated across all rate limiters on the connection."""


class RateLimiterStatusDict(TypedDict):
    max_allowed: NotRequired[int]
    in_use: NotRequired[int]
    remaining: NotRequired[int]
    total_bandwidth: NotRequired[str]
