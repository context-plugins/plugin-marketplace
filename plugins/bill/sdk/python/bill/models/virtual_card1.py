from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.disbursement_type import DisbursementTypeOrStr
from .enums.virtual_card_status import VirtualCardStatusOrStr


class VirtualCard1(SdkBaseModel):
    status: Optional[VirtualCardStatusOrStr] = UNSET
    remit_email: Optional[str] = Field(default=UNSET, alias="remitEmail")
    """Virtual card remittance email address set for the vendor"""

    enroll_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="enrollDate")
    """Virtual card enrollment date"""

    decline_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="declineDate")
    """Virtual card declined date"""

    alternate_pay_by_type: Optional[DisbursementTypeOrStr] = Field(default=UNSET, alias="alternatePayByType")


class VirtualCard1Dict(TypedDict):
    status: NotRequired[VirtualCardStatusOrStr]
    remit_email: NotRequired[str]
    enroll_date: NotRequired[RFC3339DateTime]
    decline_date: NotRequired[RFC3339DateTime]
    alternate_pay_by_type: NotRequired[DisbursementTypeOrStr]
