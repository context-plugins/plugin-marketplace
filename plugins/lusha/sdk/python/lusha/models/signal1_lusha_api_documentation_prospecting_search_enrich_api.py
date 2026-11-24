from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.name1_lusha_api_documentation_prospecting_search_enrich_api import (
    Name1LushaApiDocumentationProspectingSearchEnrichApiOrStr,
)


class Signal1LushaApiDocumentationProspectingSearchEnrichApi(SdkBaseModel):
    """Filter contacts by signal types (premium filter - charges apply per signal type)"""

    names: Optional[list[Name1LushaApiDocumentationProspectingSearchEnrichApiOrStr]] = UNSET
    """Signal types to filter by"""

    start_date: Optional[Date] = Field(default=UNSET, alias="startDate")
    """Start date for signal detection (YYYY-MM-DD format)"""


class Signal1LushaApiDocumentationProspectingSearchEnrichApiDict(TypedDict):
    names: NotRequired[list[Name1LushaApiDocumentationProspectingSearchEnrichApiOrStr]]
    start_date: NotRequired[Date]
