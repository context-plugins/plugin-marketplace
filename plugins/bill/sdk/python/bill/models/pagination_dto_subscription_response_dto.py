from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .subscription_response_dto import SubscriptionResponseDto, SubscriptionResponseDtoDict


class PaginationDtoSubscriptionResponseDto(SdkBaseModel):
    """Pagination information."""

    next_page: Optional[str] = Field(default=UNSET, alias="nextPage")
    results: Optional[list[SubscriptionResponseDto]] = UNSET


class PaginationDtoSubscriptionResponseDtoDict(TypedDict):
    next_page: NotRequired[str]
    results: NotRequired[list[SubscriptionResponseDtoDict]]
