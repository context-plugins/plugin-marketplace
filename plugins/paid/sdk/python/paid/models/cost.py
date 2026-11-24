from __future__ import annotations

from typing import Any, Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .unions.customer_attribution import CustomerAttribution, CustomerAttributionDict
from .unions.product_attribution import ProductAttribution, ProductAttributionDict


class Cost(SdkBaseModel):
    """cost variant"""

    type_: Literal["cost"] = Field(default="cost", alias="type")
    """Discriminator value: cost"""

    timestamp: Optional[RFC3339DateTime] = UNSET
    """Record time in RFC3339 format with timezone. Defaults to server receive time."""

    customer: CustomerAttribution
    product: Optional[ProductAttribution] = UNSET
    metadata: Optional[dict[str, Any]] = UNSET
    """Free-form metadata for filtering and analytics."""

    amount: float
    """Cost amount in major units of ``currency`` (e.g. dollars)."""

    currency: str
    """ISO 4217 currency code, e.g. "USD"."""

    vendor: Optional[str] = UNSET
    """Optional vendor tag for analytics (e.g. "openai", "anthropic"). Not used for pricing in this mode."""

    model: Optional[str] = UNSET
    """Optional model tag for analytics (e.g. "gpt-4o-2024-08-06")."""


class CostDict(TypedDict):
    type_: Literal["cost"]
    timestamp: NotRequired[RFC3339DateTime]
    customer: CustomerAttributionDict
    product: NotRequired[ProductAttributionDict]
    metadata: NotRequired[dict[str, Any]]
    amount: float
    currency: str
    vendor: NotRequired[str]
    model: NotRequired[str]
