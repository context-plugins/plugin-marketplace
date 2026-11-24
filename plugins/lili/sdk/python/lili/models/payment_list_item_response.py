from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status import StatusOrStr


class PaymentListItemResponse(SdkBaseModel):
    payment_id: Optional[str] = Field(default=UNSET, alias="paymentId")
    """The payment ID"""

    submission_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="submissionDate")
    """The payment submissiondate"""

    status: Optional[StatusOrStr] = UNSET


class PaymentListItemResponseDict(TypedDict):
    payment_id: NotRequired[str]
    submission_date: NotRequired[RFC3339DateTime]
    status: NotRequired[StatusOrStr]
