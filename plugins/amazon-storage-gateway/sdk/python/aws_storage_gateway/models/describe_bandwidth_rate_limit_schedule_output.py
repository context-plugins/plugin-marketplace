from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bandwidth_rate_limit_interval import BandwidthRateLimitInterval, BandwidthRateLimitIntervalDict


class DescribeBandwidthRateLimitScheduleOutput(SdkBaseModel):
    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")
    bandwidth_rate_limit_intervals: Optional[list[BandwidthRateLimitInterval]] = Field(
        default=UNSET, alias="BandwidthRateLimitIntervals"
    )
    """An array that contains the bandwidth rate limit intervals for a tape or volume gateway."""


class DescribeBandwidthRateLimitScheduleOutputDict(TypedDict):
    gateway_arn: NotRequired[str]
    bandwidth_rate_limit_intervals: NotRequired[list[BandwidthRateLimitIntervalDict]]
