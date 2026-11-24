from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .content_redaction import ContentRedaction, ContentRedactionDict
from .enums.language_option import LanguageOptionOrStr
from .enums.vocabulary_filter_method import VocabularyFilterMethodOrStr
from .language_id_settings import LanguageIdSettings, LanguageIdSettingsDict
from .summarization import Summarization, SummarizationDict


class CallAnalyticsJobSettings(SdkBaseModel):
    vocabulary_name: Optional[str] = Field(default=UNSET, alias="VocabularyName")
    """The name of the custom vocabulary you want to include in your Call Analytics transcription request. Custom
    vocabulary names are case sensitive."""

    vocabulary_filter_name: Optional[str] = Field(default=UNSET, alias="VocabularyFilterName")
    """The name of the custom vocabulary filter you want to include in your Call Analytics transcription request. Custom
    vocabulary filter names are case sensitive. Note that if you include VocabularyFilterName in your request, you must
    also include VocabularyFilterMethod."""

    vocabulary_filter_method: Optional[VocabularyFilterMethodOrStr] = Field(
        default=UNSET, alias="VocabularyFilterMethod"
    )
    """Specify how you want your custom vocabulary filter applied to your transcript. To replace words with ***, choose
    mask. To delete words, choose remove. To flag words without changing them, choose tag."""

    language_model_name: Optional[str] = Field(default=UNSET, alias="LanguageModelName")
    """The name of the custom language model you want to use when processing your Call Analytics job. Note that custom
    language model names are case sensitive. The language of the specified custom language model must match the language
    code that you specify in your transcription request. If the languages do not match, the custom language model isn't
    applied. There are no errors or warnings associated with a language mismatch."""

    content_redaction: Optional[ContentRedaction] = Field(default=UNSET, alias="ContentRedaction")
    language_options: Optional[list[LanguageOptionOrStr]] = Field(default=UNSET, alias="LanguageOptions")
    """You can specify two or more language codes that represent the languages you think may be present in your media.
    Including more than five is not recommended. If you're unsure what languages are present, do not include this
    parameter. Including language options can improve the accuracy of language identification. For a list of languages
    supported with Call Analytics, refer to the Supported languages table. To transcribe speech in Modern Standard
    Arabic (ar-SA) in Amazon Web Services GovCloud (US) (US-West, us-gov-west-1), Amazon Web Services GovCloud (US)
    (US-East, us-gov-east-1), Canada (Calgar"""

    language_id_settings: Optional[dict[str, LanguageIdSettings]] = Field(default=UNSET, alias="LanguageIdSettings")
    """If using automatic language identification in your request and you want to apply a custom language model, a
    custom vocabulary, or a custom vocabulary filter, include LanguageIdSettings with the relevant sub-parameters
    (VocabularyName, LanguageModelName, and VocabularyFilterName). LanguageIdSettings supports two to five language
    codes. Each language code you include can have an associated custom language model, custom vocabulary, and custom
    vocabulary filter. The language codes that you specify must match the languages of the associated custom language
    models, custom vocabularies, and custom vo"""

    summarization: Optional[Summarization] = Field(default=UNSET, alias="Summarization")


class CallAnalyticsJobSettingsDict(TypedDict):
    vocabulary_name: NotRequired[str]
    vocabulary_filter_name: NotRequired[str]
    vocabulary_filter_method: NotRequired[VocabularyFilterMethodOrStr]
    language_model_name: NotRequired[str]
    content_redaction: NotRequired[ContentRedactionDict]
    language_options: NotRequired[list[LanguageOptionOrStr]]
    language_id_settings: NotRequired[dict[str, LanguageIdSettingsDict]]
    summarization: NotRequired[SummarizationDict]
