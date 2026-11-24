from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .chat_message import ChatMessage, ChatMessageDict
from .unions.response_format import ResponseFormat, ResponseFormatDict


class ChatCompletionRequest(SdkBaseModel):
    """Request for the chat completions endpoint.

    Note that all parameters except for ``model``, ``stream``, and ``response_format`` are ignored."""

    model: str
    """The model to use for chat completions."""

    messages: list[ChatMessage]
    """The messages to use for chat completions."""

    stream: Optional[bool] = UNSET
    """Whether to stream the chat completions."""

    response_format: Optional[ResponseFormat] = UNSET
    """The response format to use for chat completions. OpenAI compatible."""

    max_tokens: Optional[int] = UNSET
    """The maximum number of tokens to generate. Unsupported."""

    temperature: Optional[float] = UNSET
    """The temperature to use for chat completions. Unsupported."""

    top_p: Optional[float] = UNSET
    """The top p to use for chat completions. Unsupported."""

    n: Optional[int] = UNSET
    """The number of chat completions to generate. Unsupported."""

    presence_penalty: Optional[float] = UNSET
    """The presence penalty to use for chat completions. Unsupported."""

    frequency_penalty: Optional[float] = UNSET
    """The frequency penalty to use for chat completions. Unsupported."""

    previous_interaction_id: Optional[str] = UNSET
    """Interaction ID from a previous chat completion to use as context."""


class ChatCompletionRequestDict(TypedDict):
    model: str
    messages: list[ChatMessageDict]
    stream: NotRequired[bool]
    response_format: NotRequired[ResponseFormatDict]
    max_tokens: NotRequired[int]
    temperature: NotRequired[float]
    top_p: NotRequired[float]
    n: NotRequired[int]
    presence_penalty: NotRequired[float]
    frequency_penalty: NotRequired[float]
    previous_interaction_id: NotRequired[str]
