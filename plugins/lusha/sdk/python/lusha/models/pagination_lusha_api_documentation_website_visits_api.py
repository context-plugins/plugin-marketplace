from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PaginationLushaApiDocumentationWebsiteVisitsApi(SdkBaseModel):
    size: int
    page: int


class PaginationLushaApiDocumentationWebsiteVisitsApiDict(TypedDict):
    size: int
    page: int
