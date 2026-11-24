from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .money import Money, MoneyDict


class AwsMonthlyPotentialSavings(SdkBaseModel):
    """Estimated monthly additional savings per Savings Plan (SP) type, taken from the latest PerfectScale for
    Commitments purchase projection. Unlike ``savingsTotals`` (realized YTD/lifetime savings), this is a forward-looking
    estimate of the monthly savings achievable if the recommended commitments are purchased. For member accounts, the
    AWS organization figure is attributed by each member account's share of trailing-60-day SP-eligible on-demand cost.
    A per-SP-type value of ``0.00`` means the latest projection is missing, expired, or empty. The field is omitted
    entirely only for accounts that have never had potential savings computed."""

    compute: Optional[Money] = UNSET
    database: Optional[Money] = UNSET


class AwsMonthlyPotentialSavingsDict(TypedDict):
    compute: NotRequired[MoneyDict]
    database: NotRequired[MoneyDict]
