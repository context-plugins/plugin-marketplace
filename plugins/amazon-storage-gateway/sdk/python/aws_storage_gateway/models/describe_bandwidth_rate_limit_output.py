from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DescribeBandwidthRateLimitOutput(SdkBaseModel):
    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")
    average_upload_rate_limit_in_bits_per_sec: Optional[int] = Field(
        default=UNSET, alias="AverageUploadRateLimitInBitsPerSec"
    )
    """The average upload bandwidth rate limit in bits per second. This field does not appear in the response if the
    upload rate limit is not set."""

    average_download_rate_limit_in_bits_per_sec: Optional[int] = Field(
        default=UNSET, alias="AverageDownloadRateLimitInBitsPerSec"
    )
    """The average download bandwidth rate limit in bits per second. This field does not appear in the response if the
    download rate limit is not set."""


class DescribeBandwidthRateLimitOutputDict(TypedDict):
    gateway_arn: NotRequired[str]
    average_upload_rate_limit_in_bits_per_sec: NotRequired[int]
    average_download_rate_limit_in_bits_per_sec: NotRequired[int]
