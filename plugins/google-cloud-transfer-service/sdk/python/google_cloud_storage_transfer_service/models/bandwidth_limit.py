from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BandwidthLimit(SdkBaseModel):
    """Specifies a bandwidth limit for an agent pool."""

    limit_mbps: Optional[str] = Field(default=UNSET, alias="limitMbps")
    """Bandwidth rate in megabytes per second, distributed across all the agents in the pool."""


class BandwidthLimitDict(TypedDict):
    limit_mbps: NotRequired[str]
