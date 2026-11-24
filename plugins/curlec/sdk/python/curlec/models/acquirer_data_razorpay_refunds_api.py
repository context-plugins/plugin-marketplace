from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AcquirerDataRazorpayRefundsApi(SdkBaseModel):
    """Bank reference numbers for tracking: RRN (UPI/netbanking), ARN (cards), UTR (NEFT/RTGS)."""

    arn: Optional[str] = UNSET
    rrn: Optional[str] = UNSET
    utr: Optional[str] = UNSET


class AcquirerDataRazorpayRefundsApiDict(TypedDict):
    arn: NotRequired[str]
    rrn: NotRequired[str]
    utr: NotRequired[str]
