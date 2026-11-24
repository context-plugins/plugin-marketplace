from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cloud_watch_logs_configuration import CloudWatchLogsConfiguration, CloudWatchLogsConfigurationDict
from .enums.destination2 import Destination2OrStr


class UpdateTraceSegmentDestinationRequest(SdkBaseModel):
    destination: Optional[Destination2OrStr] = Field(default=UNSET, alias="Destination")
    """The configured destination of trace segments."""

    cloud_watch_logs_configuration: Optional[CloudWatchLogsConfiguration] = Field(
        default=UNSET, alias="CloudWatchLogsConfiguration"
    )


class UpdateTraceSegmentDestinationRequestDict(TypedDict):
    destination: NotRequired[Destination2OrStr]
    cloud_watch_logs_configuration: NotRequired[CloudWatchLogsConfigurationDict]
