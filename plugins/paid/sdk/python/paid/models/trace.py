from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .cost_amount import CostAmount, CostAmountDict


class Trace(SdkBaseModel):
    """A single cost trace record with customer and product info"""

    name: str
    """The name/type of the operation (e.g., "trace.openai.agents.on_agent")"""

    vendor: str
    """The vendor/provider (e.g., "openai", "anthropic", "mistral")"""

    model: str
    """The model used for the operation (e.g., "gpt-4o-mini", "claude-3-sonnet")"""

    cost: CostAmount
    """Cost amount with currency"""

    start_time_unix_nano: str = Field(alias="startTimeUnixNano")
    """Unix timestamp in nanoseconds when the operation started"""

    end_time_unix_nano: str = Field(alias="endTimeUnixNano")
    """Unix timestamp in nanoseconds when the operation completed"""

    attributes: dict[str, Any]
    """Additional metadata about the trace (e.g., tokens, etc.)"""

    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    """The internal customer ID associated with this trace"""

    external_customer_id: OptionalNullable[str] = Field(default=UNSET, alias="externalCustomerId")
    """Your system's customer ID associated with this trace"""

    product_id: OptionalNullable[str] = Field(default=UNSET, alias="productId")
    """The product ID associated with this trace"""

    external_product_id: OptionalNullable[str] = Field(default=UNSET, alias="externalProductId")
    """Your system's product ID associated with this trace"""

    agent_id: OptionalNullable[str] = Field(default=UNSET, alias="agentId")
    """DEPRECATED: Use productId instead. The product/agent ID associated with this trace."""

    external_agent_id: OptionalNullable[str] = Field(default=UNSET, alias="externalAgentId")
    """DEPRECATED: Use externalProductId instead. Your system's agent/product ID."""


class TraceDict(TypedDict):
    name: str
    vendor: str
    model: str
    cost: CostAmountDict
    start_time_unix_nano: str
    end_time_unix_nano: str
    attributes: dict[str, Any]
    customer_id: NotRequired[str]
    external_customer_id: NotRequired[str | None]
    product_id: NotRequired[str | None]
    external_product_id: NotRequired[str | None]
    agent_id: NotRequired[str | None]
    external_agent_id: NotRequired[str | None]
