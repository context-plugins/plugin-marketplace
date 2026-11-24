from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .price_summary import PriceSummary, PriceSummaryDict


class SummaryResponse(SdkBaseModel):
    keyword: str
    total_results: OptionalNullable[str] = Field(default=UNSET, alias="totalResults")
    total_items: int = Field(alias="totalItems")
    raw_median: OptionalNullable[float] = Field(default=UNSET, alias="rawMedian")
    raw_sample_count: OptionalNullable[int] = Field(default=UNSET, alias="rawSampleCount")
    summary: OptionalNullable[PriceSummary] = UNSET
    """Deterministic price intelligence over the returned sold items."""

    cached: bool


class SummaryResponseDict(TypedDict):
    keyword: str
    total_results: NotRequired[str | None]
    total_items: int
    raw_median: NotRequired[float | None]
    raw_sample_count: NotRequired[int | None]
    summary: NotRequired[PriceSummaryDict | None]
    cached: bool
