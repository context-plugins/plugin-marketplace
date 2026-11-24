from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .input_tokens_details import InputTokensDetails, InputTokensDetailsDict
from .output_tokens_details import OutputTokensDetails, OutputTokensDetailsDict


class ResponseUsage(SdkBaseModel):
    """Estimated token usage, populated for OpenAI SDK compatibility. Counts are approximate; Parallel bills per
    request, not per token."""

    input_tokens: int
    input_tokens_details: InputTokensDetails
    """A detailed breakdown of the input tokens."""

    output_tokens: int
    output_tokens_details: OutputTokensDetails
    """A detailed breakdown of the output tokens."""

    total_tokens: int


class ResponseUsageDict(TypedDict):
    input_tokens: int
    input_tokens_details: InputTokensDetailsDict
    output_tokens: int
    output_tokens_details: OutputTokensDetailsDict
    total_tokens: int
