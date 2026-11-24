from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Location1LushaApiDocumentationProspectingSearchEnrichApi(SdkBaseModel):
    city: Optional[str] = UNSET
    state: Optional[str] = UNSET
    country: Optional[str] = UNSET
    country_iso2: Optional[str] = UNSET
    continent: Optional[str] = UNSET


class Location1LushaApiDocumentationProspectingSearchEnrichApiDict(TypedDict):
    city: NotRequired[str]
    state: NotRequired[str]
    country: NotRequired[str]
    country_iso2: NotRequired[str]
    continent: NotRequired[str]
