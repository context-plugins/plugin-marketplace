from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .contact_lusha_api_documentation_prospecting_search_enrich_api import (
    ContactLushaApiDocumentationProspectingSearchEnrichApi,
    ContactLushaApiDocumentationProspectingSearchEnrichApiDict,
)


class ContactEnrichResponse(SdkBaseModel):
    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """The requestId that was used in the request"""

    contacts: Optional[list[ContactLushaApiDocumentationProspectingSearchEnrichApi]] = UNSET


class ContactEnrichResponseDict(TypedDict):
    request_id: NotRequired[str]
    contacts: NotRequired[list[ContactLushaApiDocumentationProspectingSearchEnrichApiDict]]
