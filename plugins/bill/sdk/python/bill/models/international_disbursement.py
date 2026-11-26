from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.disbursement_sub_type import DisbursementSubTypeOrStr


class InternationalDisbursement(SdkBaseModel):
    """International disbursement dto when the disbursement type is international."""

    sent_date: Optional[Date] = Field(default=UNSET, alias="sentDate")
    """International ePayment sent date"""

    arrives_by_date: Optional[Date] = Field(default=UNSET, alias="arrivesByDate")
    """International ePayment arrives by date"""

    amount: Optional[float] = UNSET
    """Disbursement amount"""

    disbursement_sub_type: Optional[DisbursementSubTypeOrStr] = Field(default=UNSET, alias="disbursementSubType")


class InternationalDisbursementDict(TypedDict):
    sent_date: NotRequired[Date]
    arrives_by_date: NotRequired[Date]
    amount: NotRequired[float]
    disbursement_sub_type: NotRequired[DisbursementSubTypeOrStr]
