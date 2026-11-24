from __future__ import annotations

from typing import Any

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .atif_metrics import AtifMetrics, AtifMetricsDict
from .atif_observation import AtifObservation, AtifObservationDict
from .atif_tool_call import AtifToolCall, AtifToolCallDict
from .enums.source_hud_platform_jobs_api import SourceHudPlatformJobsApiOrStr
from .unions.message import Message, MessageDict
from .unions.reasoning_effort import ReasoningEffort, ReasoningEffortDict


class AtifStep(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    step_id: int
    timestamp: Optional[str] = UNSET
    source: SourceHudPlatformJobsApiOrStr
    model_name: Optional[str] = UNSET
    reasoning_effort: Optional[ReasoningEffort] = UNSET
    message: Message
    reasoning_content: Optional[str] = UNSET
    tool_calls: Optional[list[AtifToolCall]] = UNSET
    observation: Optional[AtifObservation] = UNSET
    metrics: Optional[AtifMetrics] = UNSET
    is_copied_context: Optional[bool] = UNSET
    llm_call_count: Optional[int] = UNSET
    extra: Optional[Any] = UNSET


class AtifStepDict(TypedDict):
    step_id: int
    timestamp: NotRequired[str]
    source: SourceHudPlatformJobsApiOrStr
    model_name: NotRequired[str]
    reasoning_effort: NotRequired[ReasoningEffortDict]
    message: MessageDict
    reasoning_content: NotRequired[str]
    tool_calls: NotRequired[list[AtifToolCallDict]]
    observation: NotRequired[AtifObservationDict]
    metrics: NotRequired[AtifMetricsDict]
    is_copied_context: NotRequired[bool]
    llm_call_count: NotRequired[int]
    extra: NotRequired[Any]
