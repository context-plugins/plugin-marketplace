from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company import Company, CompanyDict


class RecommendationsFetchResponse(SdkBaseModel):
    companies: Optional[list[Company]] = UNSET
    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")


class RecommendationsFetchResponseDict(TypedDict):
    companies: NotRequired[list[CompanyDict]]
    next_page_token: NotRequired[str]
