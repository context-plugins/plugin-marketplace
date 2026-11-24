from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .aws_savings_totals import AwsSavingsTotals, AwsSavingsTotalsDict


class SavingsTotals1(SdkBaseModel):
    """Year-to-date and lifetime savings per Savings Plan (SP) type. Same values as returned by ``GET
    /ps4commitments/v1/aws/organizations/{managementAccountId}`` for this organization, so callers can sum totals across
    AWS organizations without making an extra get-by-id call per organization. Lifetime is bounded by each AWS
    organization's PerfectScale for Commitments onboarding start date."""

    compute: Optional[AwsSavingsTotals] = UNSET
    """Running savings figures derived server-side from the full monthly stats history, as the sum of ``onDemandCost -
    costWithSavings`` per month. ``lifetime`` starts at PerfectScale for Commitments onboarding; ``ytd`` starts at the
    later of January 1 of the current year and onboarding. Months before the bound are excluded; the bound month and the
    current month are prorated."""

    database: Optional[AwsSavingsTotals] = UNSET
    """Running savings figures derived server-side from the full monthly stats history, as the sum of ``onDemandCost -
    costWithSavings`` per month. ``lifetime`` starts at PerfectScale for Commitments onboarding; ``ytd`` starts at the
    later of January 1 of the current year and onboarding. Months before the bound are excluded; the bound month and the
    current month are prorated."""


class SavingsTotals1Dict(TypedDict):
    compute: NotRequired[AwsSavingsTotalsDict]
    database: NotRequired[AwsSavingsTotalsDict]
