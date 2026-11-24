from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .chat_completion_token_logprob import ChatCompletionTokenLogprob, ChatCompletionTokenLogprobDict


class ChoiceLogprobs(SdkBaseModel):
    """Log probability information for the choice."""

    content: Optional[list[ChatCompletionTokenLogprob]] = UNSET
    refusal: Optional[list[ChatCompletionTokenLogprob]] = UNSET


class ChoiceLogprobsDict(TypedDict):
    content: NotRequired[list[ChatCompletionTokenLogprobDict]]
    refusal: NotRequired[list[ChatCompletionTokenLogprobDict]]
