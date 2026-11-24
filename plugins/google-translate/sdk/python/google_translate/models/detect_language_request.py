from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .document_input_config1 import DocumentInputConfig1, DocumentInputConfig1Dict


class DetectLanguageRequest(SdkBaseModel):
    """The request message for language detection."""

    document_input_config: Optional[DocumentInputConfig1] = Field(default=UNSET, alias="documentInputConfig")
    """Optional. The document configuration of the input."""

    mime_type: Optional[str] = Field(default=UNSET, alias="mimeType")
    """Optional. The format of the source text, for example, "text/html", "text/plain". If left blank, the MIME type
    defaults to "text/html"."""

    labels: Optional[dict[str, str]] = UNSET
    """Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63
    characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes.
    International characters are allowed. Label values are optional. Label keys must start with a letter. See
    https://cloud.google.com/translate/docs/advanced/labels for more information."""

    content: Optional[str] = UNSET
    """The content of the input stored as a string."""

    model: Optional[str] = UNSET
    """Optional. The language detection model to be used. Format:
    ``projects/{project-number-or-id}/locations/{location-id}/models/language-detection/{model-id}`` Only one language
    detection model is currently supported:
    ``projects/{project-number-or-id}/locations/{location-id}/models/language-detection/default``. If not specified, the
    default model is used."""


class DetectLanguageRequestDict(TypedDict):
    document_input_config: NotRequired[DocumentInputConfig1Dict]
    mime_type: NotRequired[str]
    labels: NotRequired[dict[str, str]]
    content: NotRequired[str]
    model: NotRequired[str]
