from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .location_filter import LocationFilter, LocationFilterDict
from .signal1_lusha_api_documentation_prospecting_search_enrich_api import (
    Signal1LushaApiDocumentationProspectingSearchEnrichApi,
    Signal1LushaApiDocumentationProspectingSearchEnrichApiDict,
)


class Include1(SdkBaseModel):
    departments: Optional[list[str]] = UNSET
    seniority: Optional[list[int]] = UNSET
    existing_data_points: Optional[list[str]] = UNSET
    locations: Optional[list[LocationFilter]] = UNSET
    job_titles: Optional[list[str]] = Field(default=UNSET, alias="jobTitles")
    linkedin_urls: Optional[list[str]] = Field(default=UNSET, alias="linkedinUrls")
    """Filter contacts by LinkedIn profile URLs"""

    search_text: Optional[str] = Field(default=UNSET, alias="searchText")
    """Free-text search across contact fields"""

    signal: Optional[Signal1LushaApiDocumentationProspectingSearchEnrichApi] = UNSET
    """Filter contacts by signal types (premium filter - charges apply per signal type)"""


class Include1Dict(TypedDict):
    departments: NotRequired[list[str]]
    seniority: NotRequired[list[int]]
    existing_data_points: NotRequired[list[str]]
    locations: NotRequired[list[LocationFilterDict]]
    job_titles: NotRequired[list[str]]
    linkedin_urls: NotRequired[list[str]]
    search_text: NotRequired[str]
    signal: NotRequired[Signal1LushaApiDocumentationProspectingSearchEnrichApiDict]
