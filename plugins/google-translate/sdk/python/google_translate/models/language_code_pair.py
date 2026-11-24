from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LanguageCodePair(SdkBaseModel):
    """Used with unidirectional glossaries."""

    target_language_code: Optional[str] = Field(default=UNSET, alias="targetLanguageCode")
    """Required. The ISO-639 language code for translation output, for example, "zh-CN". Expected to be an exact match
    for GlossaryTerm.language_code."""

    source_language_code: Optional[str] = Field(default=UNSET, alias="sourceLanguageCode")
    """Required. The ISO-639 language code of the input text, for example, "en-US". Expected to be an exact match for
    GlossaryTerm.language_code."""


class LanguageCodePairDict(TypedDict):
    target_language_code: NotRequired[str]
    source_language_code: NotRequired[str]
