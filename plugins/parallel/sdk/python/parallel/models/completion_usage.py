from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .completion_tokens_details import CompletionTokensDetails, CompletionTokensDetailsDict
from .prompt_tokens_details import PromptTokensDetails, PromptTokensDetailsDict


class CompletionUsage(SdkBaseModel):
    """Usage statistics for the completion request."""

    completion_tokens: int
    prompt_tokens: int
    total_tokens: int
    completion_tokens_details: Optional[CompletionTokensDetails] = UNSET
    prompt_tokens_details: Optional[PromptTokensDetails] = UNSET


class CompletionUsageDict(TypedDict):
    completion_tokens: int
    prompt_tokens: int
    total_tokens: int
    completion_tokens_details: NotRequired[CompletionTokensDetailsDict]
    prompt_tokens_details: NotRequired[PromptTokensDetailsDict]
