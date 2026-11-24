from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BandwidthRateLimitInterval(SdkBaseModel):
    start_hour_of_day: int = Field(alias="StartHourOfDay")
    """The hour of the day to start the bandwidth rate limit interval."""

    start_minute_of_hour: int = Field(alias="StartMinuteOfHour")
    """The minute of the hour to start the bandwidth rate limit interval. The interval begins at the start of that
    minute. To begin an interval exactly at the start of the hour, use the value 0."""

    end_hour_of_day: int = Field(alias="EndHourOfDay")
    """The hour of the day to end the bandwidth rate limit interval."""

    end_minute_of_hour: int = Field(alias="EndMinuteOfHour")
    """The minute of the hour to end the bandwidth rate limit interval. The bandwidth rate limit interval ends at the
    end of the minute. To end an interval at the end of an hour, use the value 59."""

    days_of_week: list[int] = Field(alias="DaysOfWeek")
    """The days of the week component of the bandwidth rate limit interval, represented as ordinal numbers from 0 to 6,
    where 0 represents Sunday and 6 represents Saturday."""

    average_upload_rate_limit_in_bits_per_sec: Optional[int] = Field(
        default=UNSET, alias="AverageUploadRateLimitInBitsPerSec"
    )
    """The average upload rate limit component of the bandwidth rate limit interval, in bits per second. This field does
    not appear in the response if the upload rate limit is not set. For Tape Gateway and Volume Gateway, the minimum
    value is 51200. This field is required for S3 File Gateway, and the minimum value is 104857600."""

    average_download_rate_limit_in_bits_per_sec: Optional[int] = Field(
        default=UNSET, alias="AverageDownloadRateLimitInBitsPerSec"
    )
    """The average download rate limit component of the bandwidth rate limit interval, in bits per second. This field
    does not appear in the response if the download rate limit is not set. S3 File Gateway does not support this
    feature."""


class BandwidthRateLimitIntervalDict(TypedDict):
    start_hour_of_day: int
    start_minute_of_hour: int
    end_hour_of_day: int
    end_minute_of_hour: int
    days_of_week: list[int]
    average_upload_rate_limit_in_bits_per_sec: NotRequired[int]
    average_download_rate_limit_in_bits_per_sec: NotRequired[int]
