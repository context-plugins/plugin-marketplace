from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bill_read_without_approvers_response_dto import (
    BillReadWithoutApproversResponseDto,
    BillReadWithoutApproversResponseDtoDict,
)


class ListResponseDtoBillReadWithoutApproversResponseDto(SdkBaseModel):
    """Response from a list API request with paging references."""

    next_page: Optional[str] = Field(default=UNSET, alias="nextPage")
    prev_page: Optional[str] = Field(default=UNSET, alias="prevPage")
    results: Optional[list[BillReadWithoutApproversResponseDto]] = UNSET


class ListResponseDtoBillReadWithoutApproversResponseDtoDict(TypedDict):
    next_page: NotRequired[str]
    prev_page: NotRequired[str]
    results: NotRequired[list[BillReadWithoutApproversResponseDtoDict]]
