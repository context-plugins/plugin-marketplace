from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class PriceSummary2(SdkBaseModel):
    """Sold-price intelligence. null for active searches."""

    count: Optional[int] = UNSET
    """Items with a usable sold price."""

    currency: OptionalNullable[str] = UNSET
    median: Optional[float] = UNSET
    mean: Optional[float] = UNSET
    min: Optional[float] = UNSET
    max: Optional[float] = UNSET
    p25: Optional[float] = UNSET
    """Lower bound of the realistic range."""

    p75: Optional[float] = UNSET
    """Upper bound of the realistic range."""

    avg_shipping: OptionalNullable[float] = Field(default=UNSET, alias="avgShipping")


class PriceSummary2Dict(TypedDict):
    count: NotRequired[int]
    currency: NotRequired[str | None]
    median: NotRequired[float]
    mean: NotRequired[float]
    min: NotRequired[float]
    max: NotRequired[float]
    p25: NotRequired[float]
    p75: NotRequired[float]
    avg_shipping: NotRequired[float | None]
