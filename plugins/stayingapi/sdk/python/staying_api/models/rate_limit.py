from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RateLimit(SdkBaseModel):
    requests_per_minute: int = Field(alias="requestsPerMinute")
    """Per-plan rate limit (requests/minute)."""


class RateLimitDict(TypedDict):
    requests_per_minute: int
