from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .money import Money, MoneyDict


class AwsMonthlyStatsEntry(SdkBaseModel):
    """One calendar-month aggregate for the AWS organization. Money fields are wrapped objects (``{amount,
    currency}``)."""

    month: str
    """Calendar month in ``YYYY-MM`` form (UTC)."""

    esr: float
    """Effective Savings Rate (ESR) for the month, as a fraction from 0 to 1. Measures what share of eligible spend is
    saved through active commitments compared with equivalent on-demand cost."""

    on_demand_cost: Money = Field(alias="onDemandCost")
    """Eligible on-demand cost for the month. On-demand cost is eligible cloud spend priced at full on-demand rates,
    that is, not discounted by a commitment."""

    cost_with_savings: Money = Field(alias="costWithSavings")
    """Actual cost after commitments for the month."""


class AwsMonthlyStatsEntryDict(TypedDict):
    month: str
    esr: float
    on_demand_cost: MoneyDict
    cost_with_savings: MoneyDict
