from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity_razorpay_documents_api import EntityRazorpayDocumentsApiOrStr
from .enums.mime_type import MimeTypeOrStr


class Document(SdkBaseModel):
    id: Optional[str] = UNSET
    """Unique document identifier. Example: doc_EsyWjHrfzb59Re. Always 14 alphanumeric characters."""

    entity: Optional[EntityRazorpayDocumentsApiOrStr] = UNSET
    name: Optional[str] = UNSET
    """Filename of the uploaded document."""

    mime_type: Optional[MimeTypeOrStr] = UNSET
    """MIME type of the uploaded file."""

    size: Optional[int] = UNSET
    """File size in bytes."""

    purpose: Optional[str] = UNSET
    """Upload reason. Example: dispute_evidence."""

    created_at: Optional[int] = UNSET
    """Unix timestamp of upload."""


class DocumentDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[EntityRazorpayDocumentsApiOrStr]
    name: NotRequired[str]
    mime_type: NotRequired[MimeTypeOrStr]
    size: NotRequired[int]
    purpose: NotRequired[str]
    created_at: NotRequired[int]
