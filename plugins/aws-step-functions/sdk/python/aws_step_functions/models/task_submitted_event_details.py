from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .history_event_execution_data_details import HistoryEventExecutionDataDetails, HistoryEventExecutionDataDetailsDict


class TaskSubmittedEventDetails(SdkBaseModel):
    resource_type: str = Field(alias="resourceType")
    """The service name of the resource in a task state."""

    resource: str
    """The action of the resource called by a task state."""

    output: Optional[str] = UNSET
    """The response from a resource when a task has started. Length constraints apply to the payload size, and are
    expressed as bytes in UTF-8 encoding."""

    output_details: Optional[HistoryEventExecutionDataDetails] = Field(default=UNSET, alias="outputDetails")


class TaskSubmittedEventDetailsDict(TypedDict):
    resource_type: str
    resource: str
    output: NotRequired[str]
    output_details: NotRequired[HistoryEventExecutionDataDetailsDict]
