from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .whois_historical_item import WhoisHistoricalItem, WhoisHistoricalItemDict


class ReverseWhoisResponse(SdkBaseModel):
    """Reverse WHOIS response. Pagination keys are capitalized (Total_Result/Total_Pages/Current_Page) as returned by
    the API."""

    total_result: Optional[int] = Field(default=UNSET, alias="Total_Result")
    total_pages: Optional[int] = Field(default=UNSET, alias="Total_Pages")
    current_page: Optional[int] = Field(default=UNSET, alias="Current_Page")
    whois_domains_historical: Optional[list[WhoisHistoricalItem]] = UNSET


class ReverseWhoisResponseDict(TypedDict):
    total_result: NotRequired[int]
    total_pages: NotRequired[int]
    current_page: NotRequired[int]
    whois_domains_historical: NotRequired[list[WhoisHistoricalItemDict]]
