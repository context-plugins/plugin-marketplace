from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .recurring_bill_read_response_dto import RecurringBillReadResponseDto, RecurringBillReadResponseDtoDict


class ListRecurringBillResponseDto(SdkBaseModel):
    """Get list of recurring bills response."""

    next_page: Optional[str] = Field(default=UNSET, alias="nextPage")
    prev_page: Optional[str] = Field(default=UNSET, alias="prevPage")
    results: Optional[list[RecurringBillReadResponseDto]] = UNSET
    count: Optional[int] = UNSET
    """Total number of recurring bills matching the list request, across all pages of results."""

    total_amount: Optional[float] = Field(default=UNSET, alias="totalAmount")
    """Sum of the amounts of all recurring bills matching the list request, across all pages of results."""


class ListRecurringBillResponseDtoDict(TypedDict):
    next_page: NotRequired[str]
    prev_page: NotRequired[str]
    results: NotRequired[list[RecurringBillReadResponseDtoDict]]
    count: NotRequired[int]
    total_amount: NotRequired[float]
