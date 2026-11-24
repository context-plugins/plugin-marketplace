from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .money import Money, MoneyDict


class AwsSavingsTotals(SdkBaseModel):
    """Running savings figures derived server-side from the full monthly stats history, as the sum of ``onDemandCost -
    costWithSavings`` per month. ``lifetime`` starts at PerfectScale for Commitments onboarding; ``ytd`` starts at the
    later of January 1 of the current year and onboarding. Months before the bound are excluded; the bound month and the
    current month are prorated."""

    ytd: Money
    """Year-to-date realized savings."""

    lifetime: Money
    """Lifetime realized savings since onboarding."""


class AwsSavingsTotalsDict(TypedDict):
    ytd: MoneyDict
    lifetime: MoneyDict
