from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class UsageResponse(SdkBaseModel):
    used: int
    limit: int
    remaining: int
    month_utc: str = Field(alias="monthUtc")
    """Current billing period date (ISO 8601 date)."""

    resets_at_utc: RFC3339DateTime = Field(alias="resetsAtUtc")
    """When the billing period resets (ISO 8601 datetime with timezone)."""


class UsageResponseDict(TypedDict):
    used: int
    limit: int
    remaining: int
    month_utc: str
    resets_at_utc: RFC3339DateTime
