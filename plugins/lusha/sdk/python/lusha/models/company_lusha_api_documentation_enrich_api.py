from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompanyLushaApiDocumentationEnrichApi(SdkBaseModel):
    name: Optional[str] = UNSET
    domain: Optional[str] = UNSET


class CompanyLushaApiDocumentationEnrichApiDict(TypedDict):
    name: NotRequired[str]
    domain: NotRequired[str]
