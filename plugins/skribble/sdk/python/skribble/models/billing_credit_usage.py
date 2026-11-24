from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .credit_usage import CreditUsage, CreditUsageDict


class BillingCreditUsage(SdkBaseModel):
    period: Optional[str] = UNSET
    """Billing period in YYYYMM format"""

    usage: Optional[list[CreditUsage]] = UNSET
    """Array of consumptions, each detailing an endpoint use and its credit usage"""

    requests: Optional[int] = UNSET
    """Total of requests made"""

    credits: Optional[int] = UNSET
    """Total of credits used"""


class BillingCreditUsageDict(TypedDict):
    period: NotRequired[str]
    usage: NotRequired[list[CreditUsageDict]]
    requests: NotRequired[int]
    credits: NotRequired[int]
