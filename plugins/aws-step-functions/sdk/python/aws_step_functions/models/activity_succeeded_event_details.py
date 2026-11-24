from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .history_event_execution_data_details import HistoryEventExecutionDataDetails, HistoryEventExecutionDataDetailsDict


class ActivitySucceededEventDetails(SdkBaseModel):
    output: Optional[str] = UNSET
    """The JSON data output by the activity task. Length constraints apply to the payload size, and are expressed as
    bytes in UTF-8 encoding."""

    output_details: Optional[HistoryEventExecutionDataDetails] = Field(default=UNSET, alias="outputDetails")


class ActivitySucceededEventDetailsDict(TypedDict):
    output: NotRequired[str]
    output_details: NotRequired[HistoryEventExecutionDataDetailsDict]
