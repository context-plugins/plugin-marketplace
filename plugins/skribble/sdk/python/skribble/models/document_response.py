from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .signature_formfield import SignatureFormfield, SignatureFormfieldDict


class DocumentResponse(SdkBaseModel):
    """Document object Response."""

    id: Optional[UUID] = UNSET
    parent_id: Optional[UUID] = UNSET
    """ID of the previous version of the Document object. As documents are immutable, every change will create a new
    version, which is connected by the parent_id."""

    title: Optional[str] = UNSET
    content_type: Optional[str] = UNSET
    size: Optional[int] = UNSET
    page_count: Optional[int] = UNSET
    page_width: Optional[int] = UNSET
    page_height: Optional[int] = UNSET
    signature_fields: Optional[list[SignatureFormfield]] = UNSET
    """Optional detected Signature Formfields"""

    owner: Optional[str] = UNSET
    read_access: Optional[list[str]] = UNSET
    """Users or API keys with read access to this document."""

    write_access: Optional[list[str]] = UNSET
    """Users or API keys with write access to this document."""

    created_at: Optional[RFC3339DateTime] = UNSET
    updated_at: Optional[RFC3339DateTime] = UNSET


class DocumentResponseDict(TypedDict):
    id: NotRequired[UUID]
    parent_id: NotRequired[UUID]
    title: NotRequired[str]
    content_type: NotRequired[str]
    size: NotRequired[int]
    page_count: NotRequired[int]
    page_width: NotRequired[int]
    page_height: NotRequired[int]
    signature_fields: NotRequired[list[SignatureFormfieldDict]]
    owner: NotRequired[str]
    read_access: NotRequired[list[str]]
    write_access: NotRequired[list[str]]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
