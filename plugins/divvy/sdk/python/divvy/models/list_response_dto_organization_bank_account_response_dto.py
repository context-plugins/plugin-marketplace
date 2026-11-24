from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .organization_bank_account_response_dto import (
    OrganizationBankAccountResponseDto,
    OrganizationBankAccountResponseDtoDict,
)


class ListResponseDtoOrganizationBankAccountResponseDto(SdkBaseModel):
    """Response from a list API request with paging references."""

    next_page: Optional[str] = Field(default=UNSET, alias="nextPage")
    prev_page: Optional[str] = Field(default=UNSET, alias="prevPage")
    results: Optional[list[OrganizationBankAccountResponseDto]] = UNSET


class ListResponseDtoOrganizationBankAccountResponseDtoDict(TypedDict):
    next_page: NotRequired[str]
    prev_page: NotRequired[str]
    results: NotRequired[list[OrganizationBankAccountResponseDtoDict]]
