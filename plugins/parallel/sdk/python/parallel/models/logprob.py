from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .logprob_top_logprob import LogprobTopLogprob, LogprobTopLogprobDict


class Logprob(SdkBaseModel):
    """The log probability of a token."""

    token: str
    bytes_: list[int] = Field(alias="bytes")
    logprob: float
    top_logprobs: list[LogprobTopLogprob]


class LogprobDict(TypedDict):
    token: str
    bytes_: list[int]
    logprob: float
    top_logprobs: list[LogprobTopLogprobDict]
