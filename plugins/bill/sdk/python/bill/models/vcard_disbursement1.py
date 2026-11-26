from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class VcardDisbursement1(SdkBaseModel):
    arrives_by_date: Optional[Date] = Field(default=UNSET, alias="arrivesByDate")
    """Virtual card payment arrives by date"""

    valid_until: Optional[Date] = Field(default=UNSET, alias="validUntil")
    """Date until when the card is valid"""

    last4_card_number: Optional[str] = Field(default=UNSET, alias="last4CardNumber")
    """Masked number for virtual card"""


class VcardDisbursement1Dict(TypedDict):
    arrives_by_date: NotRequired[Date]
    valid_until: NotRequired[Date]
    last4_card_number: NotRequired[str]
