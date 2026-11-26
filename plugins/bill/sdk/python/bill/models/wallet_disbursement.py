from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class WalletDisbursement(SdkBaseModel):
    """Wallet disbursement dto when the disbursement type is wallet."""

    arrives_by_date: Optional[Date] = Field(default=UNSET, alias="arrivesByDate")
    """Instant Transfer (wallet) payment arrives by date"""


class WalletDisbursementDict(TypedDict):
    arrives_by_date: NotRequired[Date]
