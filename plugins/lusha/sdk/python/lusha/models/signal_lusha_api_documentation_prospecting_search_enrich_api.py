from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.name_lusha_api_documentation_prospecting_search_enrich_api import (
    NameLushaApiDocumentationProspectingSearchEnrichApiOrStr,
)


class SignalLushaApiDocumentationProspectingSearchEnrichApi(SdkBaseModel):
    """Filter companies by signal types (premium filter - charges apply per signal type)."""

    names: Optional[list[NameLushaApiDocumentationProspectingSearchEnrichApiOrStr]] = UNSET
    """Signal types to filter by"""

    start_date: Optional[Date] = Field(default=UNSET, alias="startDate")
    """Start date for signal detection (YYYY-MM-DD format)"""


class SignalLushaApiDocumentationProspectingSearchEnrichApiDict(TypedDict):
    names: NotRequired[list[NameLushaApiDocumentationProspectingSearchEnrichApiOrStr]]
    start_date: NotRequired[Date]
