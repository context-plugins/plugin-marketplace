from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .credit_info import CreditInfo, CreditInfoDict


class BillingCreditInfos(SdkBaseModel):
    valid_from: Optional[RFC3339DateTime] = Field(default=UNSET, alias="validFrom")
    """ISO 8601 date-time in UTC"""

    consumptions: Optional[list[CreditInfo]] = UNSET
    """Array of consumptions, each with endpoint details and its credit cost"""


class BillingCreditInfosDict(TypedDict):
    valid_from: NotRequired[RFC3339DateTime]
    consumptions: NotRequired[list[CreditInfoDict]]
