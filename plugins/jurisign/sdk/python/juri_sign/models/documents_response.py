from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .document import Document, DocumentDict
from .pagination import Pagination, PaginationDict


class DocumentsResponse(SdkBaseModel):
    data: Optional[list[Document]] = UNSET
    meta: Optional[Pagination] = UNSET


class DocumentsResponseDict(TypedDict):
    data: NotRequired[list[DocumentDict]]
    meta: NotRequired[PaginationDict]
