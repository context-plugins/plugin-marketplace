from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteBandwidthRateLimitInput(SdkBaseModel):
    gateway_arn: str = Field(alias="GatewayARN")
    bandwidth_type: str = Field(alias="BandwidthType")
    """One of the BandwidthType values that indicates the gateway bandwidth rate limit to delete. Valid Values: UPLOAD |
    DOWNLOAD | ALL"""


class DeleteBandwidthRateLimitInputDict(TypedDict):
    gateway_arn: str
    bandwidth_type: str
