from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bill_read_without_approvers_response_dto import (
    BillReadWithoutApproversResponseDto,
    BillReadWithoutApproversResponseDtoDict,
)


class ListBillResponseDto(SdkBaseModel):
    """Response from a list API request with paging references."""

    next_page: Optional[str] = Field(default=UNSET, alias="nextPage")
    prev_page: Optional[str] = Field(default=UNSET, alias="prevPage")
    results: Optional[list[BillReadWithoutApproversResponseDto]] = UNSET
    count: Optional[int] = UNSET
    """Total number of bills matching the list request, across all pages of results."""

    total_due_amount: Optional[float] = Field(default=UNSET, alias="totalDueAmount")
    """Sum of the balances of all bills matching the list request, across all pages of results. This value is in the
    organization's base currency."""


class ListBillResponseDtoDict(TypedDict):
    next_page: NotRequired[str]
    prev_page: NotRequired[str]
    results: NotRequired[list[BillReadWithoutApproversResponseDtoDict]]
    count: NotRequired[int]
    total_due_amount: NotRequired[float]
