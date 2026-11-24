from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sink_progress import SinkProgress, SinkProgressDict
from .source_progress import SourceProgress, SourceProgressDict
from .state_operator_progress import StateOperatorProgress, StateOperatorProgressDict


class StreamingQueryProgress(SdkBaseModel):
    name: Optional[str] = UNSET
    observed_metrics: Optional[dict[str, str]] = Field(default=UNSET, alias="observedMetrics")
    duration_millis: Optional[dict[str, str]] = Field(default=UNSET, alias="durationMillis")
    timestamp: Optional[str] = UNSET
    batch_duration: Optional[str] = Field(default=UNSET, alias="batchDuration")
    sink: Optional[SinkProgress] = UNSET
    streaming_query_progress_id: Optional[str] = Field(default=UNSET, alias="streamingQueryProgressId")
    batch_id: Optional[str] = Field(default=UNSET, alias="batchId")
    state_operators: Optional[list[StateOperatorProgress]] = Field(default=UNSET, alias="stateOperators")
    event_time: Optional[dict[str, str]] = Field(default=UNSET, alias="eventTime")
    run_id: Optional[str] = Field(default=UNSET, alias="runId")
    sources: Optional[list[SourceProgress]] = UNSET


class StreamingQueryProgressDict(TypedDict):
    name: NotRequired[str]
    observed_metrics: NotRequired[dict[str, str]]
    duration_millis: NotRequired[dict[str, str]]
    timestamp: NotRequired[str]
    batch_duration: NotRequired[str]
    sink: NotRequired[SinkProgressDict]
    streaming_query_progress_id: NotRequired[str]
    batch_id: NotRequired[str]
    state_operators: NotRequired[list[StateOperatorProgressDict]]
    event_time: NotRequired[dict[str, str]]
    run_id: NotRequired[str]
    sources: NotRequired[list[SourceProgressDict]]
