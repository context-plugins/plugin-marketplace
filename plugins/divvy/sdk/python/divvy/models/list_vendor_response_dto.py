from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .vendor_response_dto import VendorResponseDto, VendorResponseDtoDict


class ListVendorResponseDto(SdkBaseModel):
    """Get list of vendors response."""

    next_page: Optional[str] = Field(default=UNSET, alias="nextPage")
    prev_page: Optional[str] = Field(default=UNSET, alias="prevPage")
    results: Optional[list[VendorResponseDto]] = UNSET
    count: Optional[int] = UNSET
    """Total number of vendors matching the list request filters, across all pages of results."""


class ListVendorResponseDtoDict(TypedDict):
    next_page: NotRequired[str]
    prev_page: NotRequired[str]
    results: NotRequired[list[VendorResponseDtoDict]]
    count: NotRequired[int]
