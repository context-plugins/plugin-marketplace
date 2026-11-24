from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .aws_monthly_potential_savings import AwsMonthlyPotentialSavings, AwsMonthlyPotentialSavingsDict
from .aws_onboarding_status import AwsOnboardingStatus, AwsOnboardingStatusDict
from .daily_coverage import DailyCoverage, DailyCoverageDict
from .monthly_stats1 import MonthlyStats1, MonthlyStats1Dict
from .savings_totals1 import SavingsTotals1, SavingsTotals1Dict
from .stats30_d1 import Stats30D1, Stats30D1Dict


class AwsOrganizationDetail(SdkBaseModel):
    management_account_id: str = Field(alias="managementAccountId")
    """12-digit account number of the AWS organization's management (payer) account."""

    display_name: OptionalNullable[str] = Field(default=UNSET, alias="displayName")
    """Human-readable account name, if available. Defaults to the AWS Organizations account name; may be overridden by a
    custom name set on the asset in the DoiT Console. Null when no name is available."""

    onboarding_status: Optional[AwsOnboardingStatus] = Field(default=UNSET, alias="onboardingStatus")
    savings_plans_sync_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="savingsPlansSyncTime")
    """Timestamp of the last successful Savings Plan inventory sync. Null when a sync has not completed yet."""

    stats30d: Optional[Stats30D1] = UNSET
    """Trailing 30-day aggregate metrics (``esr``, ``savings``), broken down by SP type."""

    savings_totals: Optional[SavingsTotals1] = Field(default=UNSET, alias="savingsTotals")
    """Year-to-date and lifetime savings per Savings Plan (SP) type. Same values as returned by ``GET
    /ps4commitments/v1/aws/organizations/{managementAccountId}`` for this organization, so callers can sum totals across
    AWS organizations without making an extra get-by-id call per organization. Lifetime is bounded by each AWS
    organization's PerfectScale for Commitments onboarding start date."""

    monthly_potential_savings: Optional[AwsMonthlyPotentialSavings] = Field(
        default=UNSET, alias="monthlyPotentialSavings"
    )
    """Estimated monthly additional savings per SP type for this AWS organization from the latest purchase
    projection."""

    monthly_stats: Optional[MonthlyStats1] = Field(default=UNSET, alias="monthlyStats")
    """Trailing 6 calendar months of AWS organization stats, grouped by SP type."""

    daily_coverage: Optional[DailyCoverage] = Field(default=UNSET, alias="dailyCoverage")
    """Trailing 30 days of commitment coverage, grouped by SP type."""


class AwsOrganizationDetailDict(TypedDict):
    management_account_id: str
    display_name: NotRequired[str | None]
    onboarding_status: NotRequired[AwsOnboardingStatusDict]
    savings_plans_sync_time: NotRequired[RFC3339DateTime | None]
    stats30d: NotRequired[Stats30D1Dict]
    savings_totals: NotRequired[SavingsTotals1Dict]
    monthly_potential_savings: NotRequired[AwsMonthlyPotentialSavingsDict]
    monthly_stats: NotRequired[MonthlyStats1Dict]
    daily_coverage: NotRequired[DailyCoverageDict]
