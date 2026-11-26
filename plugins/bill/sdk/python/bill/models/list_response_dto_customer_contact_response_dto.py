from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .customer_contact_response_dto import CustomerContactResponseDto, CustomerContactResponseDtoDict


class ListResponseDtoCustomerContactResponseDto(SdkBaseModel):
    """Response from a list API request with paging references."""

    next_page: Optional[str] = Field(default=UNSET, alias="nextPage")
    prev_page: Optional[str] = Field(default=UNSET, alias="prevPage")
    results: Optional[list[CustomerContactResponseDto]] = UNSET


class ListResponseDtoCustomerContactResponseDtoDict(TypedDict):
    next_page: NotRequired[str]
    prev_page: NotRequired[str]
    results: NotRequired[list[CustomerContactResponseDtoDict]]
