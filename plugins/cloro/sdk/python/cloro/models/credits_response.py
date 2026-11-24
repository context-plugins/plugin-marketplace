from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class CreditsResponse(SdkBaseModel):
    remaining: int
    """Credits currently remaining for your organization."""

    per_cycle: int | None = Field(alias="perCycle")
    """Credits granted per billing cycle. Null for free-tier organizations with no active subscription."""

    cycle_resets_at: RFC3339DateTime | None = Field(alias="cycleResetsAt")
    """When the current billing cycle ends and credits reset. Null for free-tier organizations with no active
    subscription."""


class CreditsResponseDict(TypedDict):
    remaining: int
    per_cycle: int | None
    cycle_resets_at: RFC3339DateTime | None
