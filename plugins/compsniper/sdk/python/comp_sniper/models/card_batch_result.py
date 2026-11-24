from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .card_input import CardInput, CardInputDict
from .compact_sold_item import CompactSoldItem, CompactSoldItemDict
from .price_summary import PriceSummary, PriceSummaryDict


class CardBatchResult(SdkBaseModel):
    reference: Optional[str] = UNSET
    card: Optional[CardInput] = UNSET
    """Supply an exact keyword, or structured fields. subject is universal; player and character are convenient
    aliases."""

    keyword: str
    ok: bool
    total_results: OptionalNullable[str] = Field(default=UNSET, alias="totalResults")
    total_items: Optional[int] = Field(default=UNSET, alias="totalItems")
    raw_median: OptionalNullable[float] = Field(default=UNSET, alias="rawMedian")
    raw_sample_count: OptionalNullable[int] = Field(default=UNSET, alias="rawSampleCount")
    summary: OptionalNullable[PriceSummary] = UNSET
    """Deterministic price intelligence over the returned sold items."""

    cached: Optional[bool] = UNSET
    items: Optional[list[CompactSoldItem]] = UNSET
    error: Optional[str] = UNSET
    code: Optional[str] = UNSET


class CardBatchResultDict(TypedDict):
    reference: NotRequired[str]
    card: NotRequired[CardInputDict]
    keyword: str
    ok: bool
    total_results: NotRequired[str | None]
    total_items: NotRequired[int]
    raw_median: NotRequired[float | None]
    raw_sample_count: NotRequired[int | None]
    summary: NotRequired[PriceSummaryDict | None]
    cached: NotRequired[bool]
    items: NotRequired[list[CompactSoldItemDict]]
    error: NotRequired[str]
    code: NotRequired[str]
