from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BandwidthLimit2(SdkBaseModel):
    """Specifies the bandwidth limit details. If this field is unspecified, the default value is set as 'No Limit'."""

    limit_mbps: Optional[str] = Field(default=UNSET, alias="limitMbps")
    """Bandwidth rate in megabytes per second, distributed across all the agents in the pool."""


class BandwidthLimit2Dict(TypedDict):
    limit_mbps: NotRequired[str]
