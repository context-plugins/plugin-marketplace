from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company import Company, CompanyDict


class CompanySearchResponse(SdkBaseModel):
    companies: Optional[list[Company]] = UNSET
    total: Optional[int] = UNSET
    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")


class CompanySearchResponseDict(TypedDict):
    companies: NotRequired[list[CompanyDict]]
    total: NotRequired[int]
    next_page_token: NotRequired[str]
