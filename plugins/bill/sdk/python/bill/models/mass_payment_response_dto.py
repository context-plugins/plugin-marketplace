from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MassPaymentResponseDto(SdkBaseModel):
    """Mass payment response DTO."""

    payment_batch_id: Optional[str] = Field(default=UNSET, alias="paymentBatchId")
    """BILL-generated ID of the mass payment batch. The value begins with ``bbq``."""


class MassPaymentResponseDtoDict(TypedDict):
    payment_batch_id: NotRequired[str]
