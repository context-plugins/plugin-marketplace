from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TopLogprob(SdkBaseModel):
    token: str
    bytes_: Optional[list[int]] = Field(default=UNSET, alias="bytes")
    logprob: float


class TopLogprobDict(TypedDict):
    token: str
    bytes_: NotRequired[list[int]]
    logprob: float
