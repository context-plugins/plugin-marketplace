from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .payment_response_dto import PaymentResponseDto, PaymentResponseDtoDict


class ListPaymentResponseDto(SdkBaseModel):
    """Get list of payments response."""

    next_page: Optional[str] = Field(default=UNSET, alias="nextPage")
    prev_page: Optional[str] = Field(default=UNSET, alias="prevPage")
    results: Optional[list[PaymentResponseDto]] = UNSET
    count: Optional[int] = UNSET
    """Total number of payments matching the list request, across all pages of results."""

    total_amount: Optional[float] = Field(default=UNSET, alias="totalAmount")
    """Sum of the amounts of all payments matching the list request, across all pages of results. This value is in the
    organization's base currency."""


class ListPaymentResponseDtoDict(TypedDict):
    next_page: NotRequired[str]
    prev_page: NotRequired[str]
    results: NotRequired[list[PaymentResponseDtoDict]]
    count: NotRequired[int]
    total_amount: NotRequired[float]
