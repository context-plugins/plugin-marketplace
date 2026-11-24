from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RomanizeTextRequest(SdkBaseModel):
    """The request message for synchronous romanization."""

    contents: Optional[list[str]] = UNSET
    """Required. The content of the input in string format."""

    source_language_code: Optional[str] = Field(default=UNSET, alias="sourceLanguageCode")
    """Optional. The ISO-639 language code of the input text if known, for example, "hi" or "zh". Supported language
    codes are listed in `Language Support <https://cloud.google.com/translate/docs/languages#roman>`__. If the source
    language isn't specified, the API attempts to identify the source language automatically and returns the source
    language for each content in the response."""


class RomanizeTextRequestDict(TypedDict):
    contents: NotRequired[list[str]]
    source_language_code: NotRequired[str]
