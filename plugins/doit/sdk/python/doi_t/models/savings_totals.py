from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .aws_savings_totals import AwsSavingsTotals, AwsSavingsTotalsDict


class SavingsTotals(SdkBaseModel):
    """Year-to-date and lifetime savings, grouped by SP type. Lifetime is bounded by the parent AWS organization's
    PerfectScale for Commitments onboarding start."""

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


class SavingsTotalsDict(TypedDict):
    compute: NotRequired[AwsSavingsTotalsDict]
    database: NotRequired[AwsSavingsTotalsDict]
