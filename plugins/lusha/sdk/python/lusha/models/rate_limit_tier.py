from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class RateLimitTier(SdkBaseModel):
    limit: Optional[float] = UNSET
    used: Optional[float] = UNSET
    remaining: Optional[float] = UNSET
    resets_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="resetsAt")


class RateLimitTierDict(TypedDict):
    limit: NotRequired[float]
    used: NotRequired[float]
    remaining: NotRequired[float]
    resets_at: NotRequired[RFC3339DateTime]
