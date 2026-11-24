from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .typosquatting_domain import TyposquattingDomain, TyposquattingDomainDict


class TyposquattingResponse(SdkBaseModel):
    status: Optional[bool] = UNSET
    total_records: Optional[int] = Field(default=UNSET, alias="totalRecords")
    current_page: Optional[int] = Field(default=UNSET, alias="currentPage")
    total_pages: Optional[int] = Field(default=UNSET, alias="totalPages")
    has_next_page: Optional[bool] = Field(default=UNSET, alias="hasNextPage")
    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    domains: Optional[list[TyposquattingDomain]] = UNSET


class TyposquattingResponseDict(TypedDict):
    status: NotRequired[bool]
    total_records: NotRequired[int]
    current_page: NotRequired[int]
    total_pages: NotRequired[int]
    has_next_page: NotRequired[bool]
    next_page_token: NotRequired[str]
    domains: NotRequired[list[TyposquattingDomainDict]]
