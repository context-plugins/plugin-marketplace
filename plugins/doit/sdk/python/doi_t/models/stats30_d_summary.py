from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .money import Money, MoneyDict


class Stats30DSummary(SdkBaseModel):
    """Minimal 30-day aggregate. Only ``esr`` and ``savings`` are persisted at this granularity. Responses are
    denominated in USD."""

    esr: OptionalNullable[float] = UNSET
    """Effective Savings Rate (ESR) over the last 30 days, as a fraction from 0 to 1 (for example, ``0.187`` is 18.7%).
    Measures what share of eligible spend is saved through active commitments compared with equivalent on-demand cost.
    Higher ESR means greater realized savings. Null when not yet available."""

    savings: Optional[Money] = UNSET
    """Total savings realized over the last 30 days from active commitments (USD)."""


class Stats30DSummaryDict(TypedDict):
    esr: NotRequired[float | None]
    savings: NotRequired[MoneyDict]
