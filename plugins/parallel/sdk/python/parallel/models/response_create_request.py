from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .response_reasoning_config import ResponseReasoningConfig, ResponseReasoningConfigDict
from .response_text_config import ResponseTextConfig, ResponseTextConfigDict
from .unions.input1_parallel_ai_responses_api import Input1ParallelAiResponsesApi, Input1ParallelAiResponsesApiDict


class ResponseCreateRequest(SdkBaseModel):
    """Request body for the Responses API (``POST /v1/responses``).

    OpenAI-Responses-compatible: point a standard OpenAI client at ``https://api.parallel.ai/v1`` with your Parallel API
    key and set ``model`` to ``parallel``. The fields below are the ones Parallel acts on; other OpenAI request fields
    (``tools``, ``tool_choice``, ``temperature``, ``top_p``, ``max_output_tokens``, ``parallel_tool_calls``,
    ``truncation``, ``store``, ``user``, ``include``) are accepted for compatibility but have no effect."""

    model: str
    """The model to run. ``parallel`` is the only supported value (matched case-insensitively); any other value is
    rejected. To trade response time for answer quality, set ``reasoning.effort`` (low/medium/high) rather than changing
    the model name."""

    input: Input1ParallelAiResponsesApi
    """The input to generate a response for: a plain string, or a list of role/content messages that includes at least
    one ``user`` message. Must be non-empty, and only text content is supported. ``input`` and ``instructions`` together
    may total at most 20,000 characters."""

    instructions: Optional[str] = UNSET
    """System instructions for the model."""

    previous_response_id: Optional[str] = UNSET
    """ID of a previous response to use as conversation context."""

    stream: Optional[bool] = UNSET
    """Whether to stream the response."""

    text: Optional[ResponseTextConfig] = UNSET
    """Configuration for text output, including structured output."""

    metadata: Optional[dict[str, str]] = UNSET
    """Arbitrary key-value pairs, echoed back on the Response object. Useful for tagging requests. At most 16 keys; keys
    up to 64 characters, values up to 512 characters."""

    reasoning: Optional[ResponseReasoningConfig] = UNSET
    """Reasoning configuration. ``effort`` (low/medium/high) controls how much research is performed; defaults to
    ``medium``."""

    background: Optional[bool] = UNSET
    """Background mode is not supported: requests with ``background=true`` are rejected with a 422 validation error. Use
    the Task API (POST /v1/tasks/runs) for long-running work."""


class ResponseCreateRequestDict(TypedDict):
    model: str
    input: Input1ParallelAiResponsesApiDict
    instructions: NotRequired[str]
    previous_response_id: NotRequired[str]
    stream: NotRequired[bool]
    text: NotRequired[ResponseTextConfigDict]
    metadata: NotRequired[dict[str, str]]
    reasoning: NotRequired[ResponseReasoningConfigDict]
    background: NotRequired[bool]
