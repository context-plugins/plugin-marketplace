from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EntityRecognizerOutputDataConfig(SdkBaseModel):
    flywheel_stats_s3_prefix: Optional[str] = Field(default=UNSET, alias="FlywheelStatsS3Prefix")
    """The Amazon S3 prefix for the data lake location of the flywheel statistics."""


class EntityRecognizerOutputDataConfigDict(TypedDict):
    flywheel_stats_s3_prefix: NotRequired[str]
