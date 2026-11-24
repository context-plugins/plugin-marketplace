from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .receivable_payment_response_dto import ReceivablePaymentResponseDto, ReceivablePaymentResponseDtoDict


class ListResponseDtoReceivablePaymentResponseDto(SdkBaseModel):
    """Response from a list API request with paging references."""

    next_page: Optional[str] = Field(default=UNSET, alias="nextPage")
    prev_page: Optional[str] = Field(default=UNSET, alias="prevPage")
    results: Optional[list[ReceivablePaymentResponseDto]] = UNSET


class ListResponseDtoReceivablePaymentResponseDtoDict(TypedDict):
    next_page: NotRequired[str]
    prev_page: NotRequired[str]
    results: NotRequired[list[ReceivablePaymentResponseDtoDict]]
