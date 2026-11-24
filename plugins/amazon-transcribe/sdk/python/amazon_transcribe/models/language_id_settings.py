from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LanguageIdSettings(SdkBaseModel):
    vocabulary_name: Optional[str] = Field(default=UNSET, alias="VocabularyName")
    """The name of the custom vocabulary you want to use when processing your transcription job. Custom vocabulary names
    are case sensitive. The language of the specified custom vocabulary must match the language code that you specify in
    your transcription request. If the languages do not match, the custom vocabulary isn't applied. There are no errors
    or warnings associated with a language mismatch."""

    vocabulary_filter_name: Optional[str] = Field(default=UNSET, alias="VocabularyFilterName")
    """The name of the custom vocabulary filter you want to use when processing your transcription job. Custom
    vocabulary filter names are case sensitive. The language of the specified custom vocabulary filter must match the
    language code that you specify in your transcription request. If the languages do not match, the custom vocabulary
    filter isn't applied. There are no errors or warnings associated with a language mismatch. Note that if you include
    VocabularyFilterName in your request, you must also include VocabularyFilterMethod."""

    language_model_name: Optional[str] = Field(default=UNSET, alias="LanguageModelName")
    """The name of the custom language model you want to use when processing your transcription job. Note that custom
    language model names are case sensitive. The language of the specified custom language model must match the language
    code that you specify in your transcription request. If the languages do not match, the custom language model isn't
    applied. There are no errors or warnings associated with a language mismatch."""


class LanguageIdSettingsDict(TypedDict):
    vocabulary_name: NotRequired[str]
    vocabulary_filter_name: NotRequired[str]
    language_model_name: NotRequired[str]
