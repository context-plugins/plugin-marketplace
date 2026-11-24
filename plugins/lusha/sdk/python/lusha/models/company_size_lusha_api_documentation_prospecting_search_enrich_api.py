from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompanySizeLushaApiDocumentationProspectingSearchEnrichApi(SdkBaseModel):
    min: Optional[float] = UNSET
    max: Optional[float] = UNSET
    employees_in_linkedin: Optional[float] = UNSET


class CompanySizeLushaApiDocumentationProspectingSearchEnrichApiDict(TypedDict):
    min: NotRequired[float]
    max: NotRequired[float]
    employees_in_linkedin: NotRequired[float]
