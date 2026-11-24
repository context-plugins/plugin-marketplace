from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .cloud_watch_log_group_log_destination import (
    CloudWatchLogGroupLogDestination,
    CloudWatchLogGroupLogDestinationDict,
)


class TextLogDestination(SdkBaseModel):
    cloud_watch: CloudWatchLogGroupLogDestination = Field(alias="cloudWatch")


class TextLogDestinationDict(TypedDict):
    cloud_watch: CloudWatchLogGroupLogDestinationDict
