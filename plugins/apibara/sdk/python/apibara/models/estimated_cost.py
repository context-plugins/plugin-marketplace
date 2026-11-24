from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.refinement_method import RefinementMethodOrStr


class EstimatedCost(SdkBaseModel):
    """Apibara robust historical price estimate. The base comparable set uses distinct final sold lots matching exact
    make + model + model year + primary damage; Copart "Sold on Approval" is excluded because it is a non-final high
    bid. Base from/to are Q1-Q3 and at least 3 exact final-sale comparables are required. When enough final sales exist
    for the target engine and mileage band (or engine alone), a market-value multiplier refines the range for high/low
    trims. The most recent retained non-final high bid from the same lot may be exposed as previous_high_bid_usd for
    context only; it never changes from, median or to and is never treated as a confirmed sale."""

    from_: int = Field(alias="from")
    """Lower bound in USD. Starts from the exact-damage Q1 and may be engine/mileage-refined when sufficient final-sale
    data exists."""

    to: int
    """Upper bound in USD. Starts from the exact-damage Q3 and may be engine/mileage-refined when sufficient final-sale
    data exists. Previous lot bids never extend this bound."""

    median: int
    """Central estimate in USD. Starts from the exact-damage median and may be engine/mileage-refined when sufficient
    final-sale data exists. Previous lot bids never change this value."""

    text: str
    """Human-readable Q1-Q3 USD range."""

    sample_count: int
    """Number of distinct exact make + model + year + primary-damage final sold comparable lots. Copart Sold on Approval
    is excluded. Estimate is null when fewer than 3 exist."""

    refinement_method: OptionalNullable[RefinementMethodOrStr] = UNSET
    """Optional high/low-trim refinement. engine_mileage is preferred when at least 5 final-sale comparables exist in
    the target engine+mileage band; engine is the fallback when at least 5 engine-matched final sales exist."""

    refinement_sample_count: OptionalNullable[int] = UNSET
    """Number of final-sale comparables behind the engine or engine+mileage refinement; null when no refinement was
    applied."""

    engine_size_l: OptionalNullable[float] = UNSET
    """Normalized engine displacement used by the refinement, in liters."""

    mileage_bucket: OptionalNullable[str] = UNSET
    """Mileage band considered by the refinement, for example 0-30k or 30-75k. Engine-only fallback may still report the
    target band."""

    market_multiplier: OptionalNullable[float] = UNSET
    """Median market-value ratio of the selected engine/mileage cohort to the same make+model+year market, applied to
    the damage-specific base range."""

    previous_high_bid_usd: OptionalNullable[int] = UNSET
    """Most recent retained high bid from the previous non-final auction cycle for the same platform+lot (for example
    Not Sold or Sold on Approval). This is context only: it does not change from, median or to and is not a confirmed
    sale price."""


class EstimatedCostDict(TypedDict):
    from_: int
    to: int
    median: int
    text: str
    sample_count: int
    refinement_method: NotRequired[RefinementMethodOrStr | None]
    refinement_sample_count: NotRequired[int | None]
    engine_size_l: NotRequired[float | None]
    mileage_bucket: NotRequired[str | None]
    market_multiplier: NotRequired[float | None]
    previous_high_bid_usd: NotRequired[int | None]
