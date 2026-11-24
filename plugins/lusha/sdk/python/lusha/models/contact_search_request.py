from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .filters_lusha_api_documentation_prospecting_search_enrich_api import (
    FiltersLushaApiDocumentationProspectingSearchEnrichApi,
    FiltersLushaApiDocumentationProspectingSearchEnrichApiDict,
)
from .pagination_params import PaginationParams, PaginationParamsDict


class ContactSearchRequest(SdkBaseModel):
    include_partial_contact: bool = Field(default=True, alias="includePartialContact")
    """When set to true, includes contacts with partial information in the search results."""

    exclude_dnc: bool = Field(default=False, alias="excludeDnc")
    """When ``true``, excludes contacts whose phones are all marked Do Not Call (DNC)."""

    pages: Optional[PaginationParams] = UNSET
    filters: FiltersLushaApiDocumentationProspectingSearchEnrichApi


class ContactSearchRequestDict(TypedDict):
    include_partial_contact: NotRequired[bool]
    exclude_dnc: NotRequired[bool]
    pages: NotRequired[PaginationParamsDict]
    filters: FiltersLushaApiDocumentationProspectingSearchEnrichApiDict
