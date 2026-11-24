from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .payment_response_dto import PaymentResponseDto, PaymentResponseDtoDict


class BulkPaymentResponseDto(SdkBaseModel):
    """Bulk payments response."""

    payments: Optional[list[PaymentResponseDto]] = UNSET
    """List of payments"""


class BulkPaymentResponseDtoDict(TypedDict):
    payments: NotRequired[list[PaymentResponseDtoDict]]
