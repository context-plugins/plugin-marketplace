from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .stream_processing_start_selector import StreamProcessingStartSelector, StreamProcessingStartSelectorDict
from .stream_processing_stop_selector import StreamProcessingStopSelector, StreamProcessingStopSelectorDict


class StartStreamProcessorRequest(SdkBaseModel):
    name: str = Field(alias="Name")
    """The name of the stream processor to start processing."""

    start_selector: Optional[StreamProcessingStartSelector] = Field(default=UNSET, alias="StartSelector")
    stop_selector: Optional[StreamProcessingStopSelector] = Field(default=UNSET, alias="StopSelector")


class StartStreamProcessorRequestDict(TypedDict):
    name: str
    start_selector: NotRequired[StreamProcessingStartSelectorDict]
    stop_selector: NotRequired[StreamProcessingStopSelectorDict]
