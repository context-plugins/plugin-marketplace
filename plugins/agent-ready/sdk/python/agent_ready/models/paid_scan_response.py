from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.payment_settlement import PaymentSettlementOrStr
from .scan import Scan, ScanDict


class PaidScanResponse(SdkBaseModel):
    """Result of a paid scan (x402 or MPP)."""

    scan: Scan
    """Full scan result. Same shape returned for sync, async, and cached reads."""

    share_url: str = Field(alias="shareUrl")
    claim: Optional[str] = UNSET
    """Signed token letting the payer claim this scan against an account. Present when claim signing is configured."""

    payment_settlement: Optional[PaymentSettlementOrStr] = Field(default=UNSET, alias="paymentSettlement")
    """Present only when the scan succeeded but on-chain settlement did not. The result is still returned rather than
    failing a paid caller."""


class PaidScanResponseDict(TypedDict):
    scan: ScanDict
    share_url: str
    claim: NotRequired[str]
    payment_settlement: NotRequired[PaymentSettlementOrStr]
