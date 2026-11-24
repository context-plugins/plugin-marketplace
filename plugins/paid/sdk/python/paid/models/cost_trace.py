from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cost_amount import CostAmount, CostAmountDict


class CostTrace(SdkBaseModel):
    """A single cost trace record"""

    name: str
    """The name/type of the operation (e.g., "trace.openai.agents.on_agent")"""

    vendor: str
    """The vendor/provider (e.g., "openai", "anthropic", "mistral")"""

    model: Optional[str] = UNSET
    """The model used for the operation (e.g., "gpt-4o-mini", "claude-3-sonnet")"""

    cost: CostAmount
    """Cost amount with currency"""

    start_time_unix_nano: str = Field(alias="startTimeUnixNano")
    """Unix timestamp in nanoseconds when the operation started"""

    end_time_unix_nano: str = Field(alias="endTimeUnixNano")
    """Unix timestamp in nanoseconds when the operation completed"""

    attributes: dict[str, Any]
    """Additional metadata about the trace (e.g., tokens, etc.)"""


class CostTraceDict(TypedDict):
    name: str
    vendor: str
    model: NotRequired[str]
    cost: CostAmountDict
    start_time_unix_nano: str
    end_time_unix_nano: str
    attributes: dict[str, Any]
