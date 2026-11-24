from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .contact_search_data import ContactSearchData, ContactSearchDataDict


class ContactSearchResponse(SdkBaseModel):
    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """The unique request ID used for subsequent enrichment requests"""

    current_page: Optional[float] = Field(default=UNSET, alias="currentPage")
    """The current page of the search results"""

    page_length: Optional[float] = Field(default=UNSET, alias="pageLength")
    """The number of results on the page"""

    total_results: Optional[float] = Field(default=UNSET, alias="totalResults")
    """The total number of search results"""

    contacts: Optional[list[ContactSearchData]] = UNSET


class ContactSearchResponseDict(TypedDict):
    request_id: NotRequired[str]
    current_page: NotRequired[float]
    page_length: NotRequired[float]
    total_results: NotRequired[float]
    contacts: NotRequired[list[ContactSearchDataDict]]
