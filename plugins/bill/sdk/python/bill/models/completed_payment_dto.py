from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompletedPaymentDto(SdkBaseModel):
    """Completed payment DTO."""

    bill_id: Optional[str] = Field(default=UNSET, alias="billId")
    """BILL-generated ID of the bill. The value begins with ``00n``."""

    payment_id: Optional[str] = Field(default=UNSET, alias="paymentId")
    """BILL-generated ID of the payment. The value begins with ``stp``."""


class CompletedPaymentDtoDict(TypedDict):
    bill_id: NotRequired[str]
    payment_id: NotRequired[str]
