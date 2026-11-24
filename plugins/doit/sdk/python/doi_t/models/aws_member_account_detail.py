from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .aws_monthly_potential_savings import AwsMonthlyPotentialSavings, AwsMonthlyPotentialSavingsDict
from .daily_coverage import DailyCoverage, DailyCoverageDict
from .monthly_stats import MonthlyStats, MonthlyStatsDict
from .savings_totals import SavingsTotals, SavingsTotalsDict
from .stats30_d import Stats30D, Stats30DDict


class AwsMemberAccountDetail(SdkBaseModel):
    """Single member AWS account detail. Adds the trailing-window stats that drive the per-member-account view on the
    DoiT Console overview screen on top of the list-item shape:
    - ``monthlyStats``: last 6 calendar months per SP type.
    - ``dailyCoverage``: last 30 days per SP type.
    - ``savingsTotals``: year-to-date and lifetime savings per SP type, bounded by the parent AWS organization's
        PerfectScale for Commitments onboarding start.

    ``monthlyPotentialSavings`` (estimated monthly additional savings per SP type) is inherited from the list-item shape
    (``AwsMemberAccount``)."""

    member_account_id: str = Field(alias="memberAccountId")
    """12-digit AWS member account ID."""

    management_account_id: str = Field(alias="managementAccountId")
    """12-digit AWS management (payer) account ID of the parent AWS Organization."""

    display_name: OptionalNullable[str] = Field(default=UNSET, alias="displayName")
    """Human-readable account name, if available. Defaults to the AWS Organizations account name; may be overridden by a
    custom name set on the asset in the DoiT Console. Null when no name is available."""

    stats30d: Optional[Stats30D] = UNSET
    """Trailing 30-day aggregate metrics per SP type (``compute``, ``database``)."""

    monthly_potential_savings: Optional[AwsMonthlyPotentialSavings] = Field(
        default=UNSET, alias="monthlyPotentialSavings"
    )
    """Estimated monthly additional savings per SP type for this member account, attributed from the parent AWS
    organization's projection by share of trailing-60-day Savings Plan-eligible on-demand cost."""

    monthly_stats: Optional[MonthlyStats] = Field(default=UNSET, alias="monthlyStats")
    """Trailing 6 calendar months of stats, grouped by SP type."""

    daily_coverage: Optional[DailyCoverage] = Field(default=UNSET, alias="dailyCoverage")
    """Trailing 30 days of commitment coverage, grouped by SP type."""

    savings_totals: Optional[SavingsTotals] = Field(default=UNSET, alias="savingsTotals")
    """Year-to-date and lifetime savings, grouped by SP type. Lifetime is bounded by the parent AWS organization's
    PerfectScale for Commitments onboarding start."""


class AwsMemberAccountDetailDict(TypedDict):
    member_account_id: str
    management_account_id: str
    display_name: NotRequired[str | None]
    stats30d: NotRequired[Stats30DDict]
    monthly_potential_savings: NotRequired[AwsMonthlyPotentialSavingsDict]
    monthly_stats: NotRequired[MonthlyStatsDict]
    daily_coverage: NotRequired[DailyCoverageDict]
    savings_totals: NotRequired[SavingsTotalsDict]
