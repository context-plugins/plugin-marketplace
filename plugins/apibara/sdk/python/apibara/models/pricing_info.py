from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .estimated_cost import EstimatedCost, EstimatedCostDict


class PricingInfo(SdkBaseModel):
    current_bid_usd: OptionalNullable[float] = UNSET
    """Current observed bid. Zero/unavailable source values are normalized to null."""

    buy_now_usd: OptionalNullable[float] = UNSET
    """Buy Now amount; unavailable/zero source placeholders are null."""

    sale_price_usd: OptionalNullable[float] = UNSET
    """Canonical persisted final/approval price when positive; unavailable/zero source placeholders are null."""

    current_bid_at: OptionalNullable[RFC3339DateTime] = UNSET
    """Source-backed observation timestamp for current_bid_usd when a matching bid event for the current auction cycle
    was captured. Null when no matching source timestamp exists; never inferred from generic vehicle updated_at."""

    current_bid2_usd: OptionalNullable[float] = UNSET
    """Legacy secondary source bid field. Zero/unavailable values are normalized to null."""

    last_sold_price_usd: OptionalNullable[float] = UNSET
    """Persisted last known positive sale price; unavailable/zero source placeholders are null."""

    estimated_retail_value_usd: OptionalNullable[float] = UNSET
    """Copart Estimated Retail Value (ERV) when the Copart source provides a positive value. Null for IAAI and for
    Copart records where ERV is unavailable or zero."""

    estimated_cost: OptionalNullable[EstimatedCost] = UNSET
    """Apibara robust historical final-sale estimate. Exact make + model + model year + primary damage Q1-Q3 is the base
    and fewer than 3 exact final-sale comparables yields null. Copart Sold on Approval / On Approval is excluded. When
    sufficient final sales exist, engine + mileage-band (or engine-only) market-value refinement adjusts high/low-trim
    vehicles. The most recent retained non-final bid for the same lot may be exposed as previous_high_bid_usd strictly
    as context and never changes the Q1-Q3 range or median. Distinct from Copart estimated_retail_value_usd."""


class PricingInfoDict(TypedDict):
    current_bid_usd: NotRequired[float | None]
    buy_now_usd: NotRequired[float | None]
    sale_price_usd: NotRequired[float | None]
    current_bid_at: NotRequired[RFC3339DateTime | None]
    current_bid2_usd: NotRequired[float | None]
    last_sold_price_usd: NotRequired[float | None]
    estimated_retail_value_usd: NotRequired[float | None]
    estimated_cost: NotRequired[EstimatedCostDict | None]
