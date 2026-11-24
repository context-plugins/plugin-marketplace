from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1PoshmarkSoldResponse1(SdkBaseModel):
    code: Literal["rate_limited"] = "rate_limited"
    error: str
    plan: str
    limit: float
    remaining: Literal[0] = 0
    retry_after: float
    reset: float


class V1PoshmarkSoldResponse1Dict(TypedDict):
    code: Literal["rate_limited"]
    error: str
    plan: str
    limit: float
    remaining: Literal[0]
    retry_after: float
    reset: float
