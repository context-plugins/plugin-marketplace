from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DocumentTranslation3(SdkBaseModel):
    """The document's translation output if a glossary is provided in the request. This can be the same as
    [TranslateDocumentResponse.document_translation] if no glossary terms apply."""

    byte_stream_outputs: Optional[list[str]] = Field(default=UNSET, alias="byteStreamOutputs")
    """The array of translated documents. It is expected to be size 1 for now. We may produce multiple translated
    documents in the future for other type of file formats."""

    detected_language_code: Optional[str] = Field(default=UNSET, alias="detectedLanguageCode")
    """The detected language for the input document. If the user did not provide the source language for the input
    document, this field will have the language code automatically detected. If the source language was passed,
    auto-detection of the language does not occur and this field is empty."""

    mime_type: Optional[str] = Field(default=UNSET, alias="mimeType")
    """The translated document's mime type."""


class DocumentTranslation3Dict(TypedDict):
    byte_stream_outputs: NotRequired[list[str]]
    detected_language_code: NotRequired[str]
    mime_type: NotRequired[str]
