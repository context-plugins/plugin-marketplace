from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .bandwidth_rate_limit_interval import BandwidthRateLimitInterval, BandwidthRateLimitIntervalDict


class UpdateBandwidthRateLimitScheduleInput(SdkBaseModel):
    gateway_arn: str = Field(alias="GatewayARN")
    bandwidth_rate_limit_intervals: list[BandwidthRateLimitInterval] = Field(alias="BandwidthRateLimitIntervals")
    """An array containing bandwidth rate limit schedule intervals for a gateway. When no bandwidth rate limit intervals
    have been scheduled, the array is empty."""


class UpdateBandwidthRateLimitScheduleInputDict(TypedDict):
    gateway_arn: str
    bandwidth_rate_limit_intervals: list[BandwidthRateLimitIntervalDict]
