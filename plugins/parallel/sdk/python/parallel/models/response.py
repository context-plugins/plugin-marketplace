from __future__ import annotations

from typing import Any, Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.model import Model, ModelOrStr
from .enums.prompt_cache_retention import PromptCacheRetentionOrStr
from .enums.service_tier import ServiceTierOrStr
from .enums.status1_parallel_ai_responses_api import Status1ParallelAiResponsesApiOrStr
from .enums.truncation import TruncationOrStr
from .incomplete_details import IncompleteDetails, IncompleteDetailsDict
from .moderation import Moderation, ModerationDict
from .response_error import ResponseError, ResponseErrorDict
from .response_output_message import ResponseOutputMessage, ResponseOutputMessageDict
from .response_reasoning_config import ResponseReasoningConfig, ResponseReasoningConfigDict
from .response_text_config import ResponseTextConfig, ResponseTextConfigDict
from .response_usage import ResponseUsage, ResponseUsageDict


class Response(SdkBaseModel):
    """A response from the ``parallel`` model. A completed response contains a single assistant message whose text is
    annotated with URL citations grounding the answer."""

    id: str
    created_at: float
    error: Optional[ResponseError] = UNSET
    incomplete_details: Optional[IncompleteDetails] = UNSET
    instructions: Optional[str] = UNSET
    metadata: Optional[dict[str, str]] = UNSET
    model: ModelOrStr = Model.PARALLEL
    object_: Literal["response"] = Field(default="response", alias="object")
    output: list[ResponseOutputMessage]
    parallel_tool_calls: bool
    temperature: Optional[float] = UNSET
    tool_choice: str = "auto"
    tools: Optional[list[Any]] = UNSET
    top_p: Optional[float] = UNSET
    background: Optional[bool] = UNSET
    completed_at: Optional[float] = UNSET
    conversation: OptionalNullable[str] = UNSET
    max_output_tokens: Optional[int] = UNSET
    max_tool_calls: Optional[int] = UNSET
    moderation: Optional[Moderation] = UNSET
    previous_response_id: Optional[str] = UNSET
    prompt: OptionalNullable[str] = UNSET
    prompt_cache_key: Optional[str] = UNSET
    prompt_cache_retention: Optional[PromptCacheRetentionOrStr] = UNSET
    reasoning: Optional[ResponseReasoningConfig] = UNSET
    safety_identifier: Optional[str] = UNSET
    service_tier: Optional[ServiceTierOrStr] = UNSET
    status: Optional[Status1ParallelAiResponsesApiOrStr] = UNSET
    text: Optional[ResponseTextConfig] = UNSET
    top_logprobs: Optional[int] = UNSET
    truncation: Optional[TruncationOrStr] = UNSET
    usage: Optional[ResponseUsage] = UNSET
    user: Optional[str] = UNSET


class ResponseDict(TypedDict):
    id: str
    created_at: float
    error: NotRequired[ResponseErrorDict]
    incomplete_details: NotRequired[IncompleteDetailsDict]
    instructions: NotRequired[str]
    metadata: NotRequired[dict[str, str]]
    model: NotRequired[ModelOrStr]
    object_: Literal["response"]
    output: list[ResponseOutputMessageDict]
    parallel_tool_calls: bool
    temperature: NotRequired[float]
    tool_choice: NotRequired[str]
    tools: NotRequired[list[Any]]
    top_p: NotRequired[float]
    background: NotRequired[bool]
    completed_at: NotRequired[float]
    conversation: NotRequired[str | None]
    max_output_tokens: NotRequired[int]
    max_tool_calls: NotRequired[int]
    moderation: NotRequired[ModerationDict]
    previous_response_id: NotRequired[str]
    prompt: NotRequired[str | None]
    prompt_cache_key: NotRequired[str]
    prompt_cache_retention: NotRequired[PromptCacheRetentionOrStr]
    reasoning: NotRequired[ResponseReasoningConfigDict]
    safety_identifier: NotRequired[str]
    service_tier: NotRequired[ServiceTierOrStr]
    status: NotRequired[Status1ParallelAiResponsesApiOrStr]
    text: NotRequired[ResponseTextConfigDict]
    top_logprobs: NotRequired[int]
    truncation: NotRequired[TruncationOrStr]
    usage: NotRequired[ResponseUsageDict]
    user: NotRequired[str]
