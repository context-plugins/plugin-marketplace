from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1MercariResponse11(SdkBaseModel):
    code: Literal["quota_exceeded"] = "quota_exceeded"
    error: str
    plan: str
    limit: float
    used: float
    remaining: Literal[0] = 0
    reset_at: str
    retry_after: float
    upgrade_url: str


class V1MercariResponse11Dict(TypedDict):
    code: Literal["quota_exceeded"]
    error: str
    plan: str
    limit: float
    used: float
    remaining: Literal[0]
    reset_at: str
    retry_after: float
    upgrade_url: str
