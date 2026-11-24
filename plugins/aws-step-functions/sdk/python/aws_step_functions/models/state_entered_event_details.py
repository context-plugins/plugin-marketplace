from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .history_event_execution_data_details import HistoryEventExecutionDataDetails, HistoryEventExecutionDataDetailsDict


class StateEnteredEventDetails(SdkBaseModel):
    name: str
    """The name of the state."""

    input: Optional[str] = UNSET
    """The string that contains the JSON input data for the state. Length constraints apply to the payload size, and are
    expressed as bytes in UTF-8 encoding."""

    input_details: Optional[HistoryEventExecutionDataDetails] = Field(default=UNSET, alias="inputDetails")


class StateEnteredEventDetailsDict(TypedDict):
    name: str
    input: NotRequired[str]
    input_details: NotRequired[HistoryEventExecutionDataDetailsDict]
