from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_search_result import GoogleCloudApihubV1SearchResult, GoogleCloudApihubV1SearchResultDict


class GoogleCloudApihubV1SearchResourcesResponse(SdkBaseModel):
    """Response for the SearchResources method."""

    search_results: Optional[list[GoogleCloudApihubV1SearchResult]] = Field(default=UNSET, alias="searchResults")
    """List of search results according to the filter and search query specified. The order of search results represents
    the ranking."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Pass this token in the SearchResourcesRequest to continue to list results. If all results have been returned,
    this field is an empty string or not present in the response."""


class GoogleCloudApihubV1SearchResourcesResponseDict(TypedDict):
    search_results: NotRequired[list[GoogleCloudApihubV1SearchResultDict]]
    next_page_token: NotRequired[str]
