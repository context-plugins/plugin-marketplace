from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SignatureDocumentUpload(SdkBaseModel):
    content: Optional[str] = UNSET
    """Base64 encoded bytes of the document. Maximum document size is **112.5 MB** unencoded (**150 MB**
    Base64-encoded)."""


class SignatureDocumentUploadDict(TypedDict):
    content: NotRequired[str]
