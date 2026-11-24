from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .created_by import CreatedBy, CreatedByDict
from .enums.status_juri_sign_documents_api import StatusJuriSignDocumentsApiOrStr


class Document(SdkBaseModel):
    id: Optional[UUID] = UNSET
    title: Optional[str] = UNSET
    original_filename: Optional[str] = UNSET
    status: Optional[StatusJuriSignDocumentsApiOrStr] = UNSET
    page_count: Optional[int] = UNSET
    file_size: Optional[int] = UNSET
    """Size in bytes"""

    file_hash: Optional[str] = UNSET
    """SHA-256 hash of the original file"""

    created_at: Optional[RFC3339DateTime] = UNSET
    created_by: Optional[CreatedBy] = UNSET


class DocumentDict(TypedDict):
    id: NotRequired[UUID]
    title: NotRequired[str]
    original_filename: NotRequired[str]
    status: NotRequired[StatusJuriSignDocumentsApiOrStr]
    page_count: NotRequired[int]
    file_size: NotRequired[int]
    file_hash: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
    created_by: NotRequired[CreatedByDict]
