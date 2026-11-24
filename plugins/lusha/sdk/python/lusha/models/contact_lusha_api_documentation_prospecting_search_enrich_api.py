from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .contact_enrich_data import ContactEnrichData, ContactEnrichDataDict


class ContactLushaApiDocumentationProspectingSearchEnrichApi(SdkBaseModel):
    id: Optional[str] = UNSET
    """The ID of the contact from the enrichment request"""

    is_success: Optional[bool] = Field(default=UNSET, alias="isSuccess")
    """Indicates whether the enrichment process was successful"""

    data: Optional[ContactEnrichData] = UNSET


class ContactLushaApiDocumentationProspectingSearchEnrichApiDict(TypedDict):
    id: NotRequired[str]
    is_success: NotRequired[bool]
    data: NotRequired[ContactEnrichDataDict]
