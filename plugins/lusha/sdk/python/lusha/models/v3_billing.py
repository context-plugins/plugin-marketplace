from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V3Billing(SdkBaseModel):
    """Credit usage summary for a V3 API request"""

    credits_charged: Optional[int] = Field(default=UNSET, alias="creditsCharged")
    """Total credits charged for this request"""

    results_returned: Optional[int] = Field(default=UNSET, alias="resultsReturned")
    """Number of successful results returned"""


class V3BillingDict(TypedDict):
    credits_charged: NotRequired[int]
    results_returned: NotRequired[int]
