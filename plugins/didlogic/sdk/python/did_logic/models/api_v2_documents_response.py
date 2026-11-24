from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .document import Document, DocumentDict
from .pagination_didlogic_com_hlr_lookups_api import (
    PaginationDidlogicComHlrLookupsApi,
    PaginationDidlogicComHlrLookupsApiDict,
)


class ApiV2DocumentsResponse(SdkBaseModel):
    documents: list[Document]
    """List of documents"""

    pagination: PaginationDidlogicComHlrLookupsApi
    """Pagination metadata"""


class ApiV2DocumentsResponseDict(TypedDict):
    documents: list[DocumentDict]
    pagination: PaginationDidlogicComHlrLookupsApiDict
