from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvoicePaymentLinkResponseDto(SdkBaseModel):
    """Invoice Payment Link Response Dto."""

    payment_link: Optional[str] = Field(default=UNSET, alias="paymentLink")
    """Invoice payment link"""


class InvoicePaymentLinkResponseDtoDict(TypedDict):
    payment_link: NotRequired[str]
