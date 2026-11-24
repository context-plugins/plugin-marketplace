from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .logprob_top_logprob1 import LogprobTopLogprob1, LogprobTopLogprob1Dict


class Logprob2(SdkBaseModel):
    """A logprob is the logarithmic probability that the model assigns to producing a particular token at a given
    position in the sequence. Less-negative (higher) logprob values indicate greater model confidence in that token
    choice."""

    token: str
    logprob: float
    top_logprobs: Optional[list[LogprobTopLogprob1]] = UNSET


class Logprob2Dict(TypedDict):
    token: str
    logprob: float
    top_logprobs: NotRequired[list[LogprobTopLogprob1Dict]]
