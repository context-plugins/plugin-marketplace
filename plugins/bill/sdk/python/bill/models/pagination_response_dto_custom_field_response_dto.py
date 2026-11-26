from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_field_response_dto import CustomFieldResponseDto, CustomFieldResponseDtoDict


class PaginationResponseDtoCustomFieldResponseDto(SdkBaseModel):
    """Response from a list API request with paging references."""

    next_page: Optional[str] = Field(default=UNSET, alias="nextPage")
    """Next page token"""

    prev_page: Optional[str] = Field(default=UNSET, alias="prevPage")
    """Previous page token"""

    results: Optional[list[CustomFieldResponseDto]] = UNSET
    """Results"""


class PaginationResponseDtoCustomFieldResponseDtoDict(TypedDict):
    next_page: NotRequired[str]
    prev_page: NotRequired[str]
    results: NotRequired[list[CustomFieldResponseDtoDict]]
