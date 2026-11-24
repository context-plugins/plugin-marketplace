from __future__ import annotations

from typing import Any, Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .cost_override import CostOverride, CostOverrideDict
from .token_usage import TokenUsage, TokenUsageDict
from .unions.customer_attribution import CustomerAttribution, CustomerAttributionDict
from .unions.product_attribution import ProductAttribution, ProductAttributionDict


class Cost1(SdkBaseModel):
    """usage variant"""

    type_: Literal["usage"] = Field(default="usage", alias="type")
    """Discriminator value: usage"""

    timestamp: Optional[RFC3339DateTime] = UNSET
    """Record time in RFC3339 format with timezone. Defaults to server receive time."""

    customer: CustomerAttribution
    product: Optional[ProductAttribution] = UNSET
    metadata: Optional[dict[str, Any]] = UNSET
    """Free-form metadata for filtering and analytics."""

    vendor: str
    """Provider name, used together with ``model`` to look up pricing (e.g. "openai", "anthropic")."""

    model: str
    """Exact provider model ID (e.g. "gpt-4o-2024-08-06")."""

    usage: TokenUsage
    cost_override: Optional[CostOverride] = Field(default=UNSET, alias="costOverride")
    """If supplied, overrides server-side pricing. The usage breakdown is still recorded for analytics."""


class Cost1Dict(TypedDict):
    type_: Literal["usage"]
    timestamp: NotRequired[RFC3339DateTime]
    customer: CustomerAttributionDict
    product: NotRequired[ProductAttributionDict]
    metadata: NotRequired[dict[str, Any]]
    vendor: str
    model: str
    usage: TokenUsageDict
    cost_override: NotRequired[CostOverrideDict]
