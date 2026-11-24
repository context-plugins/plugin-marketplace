from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class LogprobTopLogprob(SdkBaseModel):
    """The top log probability of a token."""

    token: str
    bytes_: list[int] = Field(alias="bytes")
    logprob: float


class LogprobTopLogprobDict(TypedDict):
    token: str
    bytes_: list[int]
    logprob: float
