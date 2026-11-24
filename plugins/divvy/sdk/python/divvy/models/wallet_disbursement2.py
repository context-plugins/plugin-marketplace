from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class WalletDisbursement2(SdkBaseModel):
    arrives_by_date: Optional[Date] = Field(default=UNSET, alias="arrivesByDate")
    """Instant Transfer (wallet) payment arrives by date"""


class WalletDisbursement2Dict(TypedDict):
    arrives_by_date: NotRequired[Date]
