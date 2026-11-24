from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .document import Document, DocumentDict


class DocumentsResponse1(SdkBaseModel):
    data: Optional[Document] = UNSET


class DocumentsResponse1Dict(TypedDict):
    data: NotRequired[DocumentDict]
