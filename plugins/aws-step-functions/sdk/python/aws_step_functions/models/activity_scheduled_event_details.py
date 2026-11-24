from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .history_event_execution_data_details import HistoryEventExecutionDataDetails, HistoryEventExecutionDataDetailsDict


class ActivityScheduledEventDetails(SdkBaseModel):
    resource: str
    """The Amazon Resource Name (ARN) of the scheduled activity."""

    input: Optional[str] = UNSET
    """The JSON data input to the activity task. Length constraints apply to the payload size, and are expressed as
    bytes in UTF-8 encoding."""

    input_details: Optional[HistoryEventExecutionDataDetails] = Field(default=UNSET, alias="inputDetails")
    timeout_in_seconds: Optional[int] = Field(default=UNSET, alias="timeoutInSeconds")
    """The maximum allowed duration of the activity task."""

    heartbeat_in_seconds: Optional[int] = Field(default=UNSET, alias="heartbeatInSeconds")
    """The maximum allowed duration between two heartbeats for the activity task."""


class ActivityScheduledEventDetailsDict(TypedDict):
    resource: str
    input: NotRequired[str]
    input_details: NotRequired[HistoryEventExecutionDataDetailsDict]
    timeout_in_seconds: NotRequired[int]
    heartbeat_in_seconds: NotRequired[int]
