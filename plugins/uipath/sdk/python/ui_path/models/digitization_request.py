from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.content_type import ContentTypeOrStr


class DigitizationRequest(SdkBaseModel):
    """Request payload for digitizing a document"""

    document_id: str = Field(alias="documentId")
    """Reference identifier for the document. This can be a file path or a document reference key used by UiPath
    activities."""

    content_type: Optional[ContentTypeOrStr] = Field(default=UNSET, alias="contentType")
    """MIME type of the document being submitted"""

    document_base64: Optional[str] = Field(default=UNSET, alias="documentBase64")
    """Base64-encoded document content when submitting inline"""


class DigitizationRequestDict(TypedDict):
    document_id: str
    content_type: NotRequired[ContentTypeOrStr]
    document_base64: NotRequired[str]
