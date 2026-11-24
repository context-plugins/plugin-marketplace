from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateBandwidthRateLimitInput(SdkBaseModel):
    gateway_arn: str = Field(alias="GatewayARN")
    average_upload_rate_limit_in_bits_per_sec: Optional[int] = Field(
        default=UNSET, alias="AverageUploadRateLimitInBitsPerSec"
    )
    """The average upload bandwidth rate limit in bits per second."""

    average_download_rate_limit_in_bits_per_sec: Optional[int] = Field(
        default=UNSET, alias="AverageDownloadRateLimitInBitsPerSec"
    )
    """The average download bandwidth rate limit in bits per second."""


class UpdateBandwidthRateLimitInputDict(TypedDict):
    gateway_arn: str
    average_upload_rate_limit_in_bits_per_sec: NotRequired[int]
    average_download_rate_limit_in_bits_per_sec: NotRequired[int]
