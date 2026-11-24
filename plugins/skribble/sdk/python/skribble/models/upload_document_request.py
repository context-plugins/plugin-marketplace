from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UploadDocumentRequest(SdkBaseModel):
    title: str
    """Title of the document."""

    read_access: Optional[list[str]] = UNSET
    """Give specific users or API keys read access to this document."""

    write_access: Optional[list[str]] = UNSET
    """Give specific users or API keys write access to this document."""

    content: str
    """Base64 encoded bytes of the document."""

    content_type: Optional[str] = UNSET
    """Content type of bytes sent in content. Currently, only application/pdf is supported."""

    file_url: str
    """Publicly accessible URL for document download."""


class UploadDocumentRequestDict(TypedDict):
    title: str
    read_access: NotRequired[list[str]]
    write_access: NotRequired[list[str]]
    content: str
    content_type: NotRequired[str]
    file_url: str
