from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Document(SdkBaseModel):
    document_id: str = Field(alias="documentId")
    document_sha256: str = Field(alias="documentSha256")


class DocumentDict(TypedDict):
    document_id: str
    document_sha256: str
