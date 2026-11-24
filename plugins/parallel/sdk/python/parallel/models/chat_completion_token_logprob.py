from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .top_logprob import TopLogprob, TopLogprobDict


class ChatCompletionTokenLogprob(SdkBaseModel):
    token: str
    bytes_: Optional[list[int]] = Field(default=UNSET, alias="bytes")
    logprob: float
    top_logprobs: list[TopLogprob]


class ChatCompletionTokenLogprobDict(TypedDict):
    token: str
    bytes_: NotRequired[list[int]]
    logprob: float
    top_logprobs: list[TopLogprobDict]
