from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LocationLushaApiDocumentationProspectingSearchEnrichApi(SdkBaseModel):
    country: Optional[str] = UNSET


class LocationLushaApiDocumentationProspectingSearchEnrichApiDict(TypedDict):
    country: NotRequired[str]
