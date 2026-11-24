from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CreateSignatureAttachmentRequest(SdkBaseModel):
    filename: str
    """File name of the attachment."""

    content_type: str
    """Content type of the attachment. Supported types: ``application/pdf``, ``application/x-tika-msoffice``,
    ``application/x-tika-ooxml``, ``application/msword``,
    ``application/vnd.openxmlformats-officedocument.wordprocessingml.document``,
    ``application/vnd.ms-word.document.macroEnabled.12``, ``application/vnd.ms-excel``,
    ``application/vnd.openxmlformats-officedocument.spreadsheetml.sheet``,
    ``application/vnd.ms-excel.sheet.macroenabled.12``, ``application/vnd.ms-powerpoint``,
    ``application/vnd.openxmlformats-officedocument.presentationml.presentation``,
    ``application/vnd.ms-powerpoint.presentation.macroEnabled.12``, ``image/gif``, ``image/jpeg``, ``image/png``,
    ``text/plain``"""

    content: str
    """Base64 encoded bytes of the attachment."""


class CreateSignatureAttachmentRequestDict(TypedDict):
    filename: str
    content_type: str
    content: str
