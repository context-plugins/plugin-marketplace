from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class JobTitleLushaApiDocumentationEnrichmentApi(SdkBaseModel):
    seniority: str
    title: str
    departments: list[str]


class JobTitleLushaApiDocumentationEnrichmentApiDict(TypedDict):
    seniority: str
    title: str
    departments: list[str]
