from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .translate_text_glossary_config2 import TranslateTextGlossaryConfig2, TranslateTextGlossaryConfig2Dict
from .transliteration_config2 import TransliterationConfig2, TransliterationConfig2Dict


class TranslateTextRequest(SdkBaseModel):
    """The request message for synchronous translation."""

    contents: Optional[list[str]] = UNSET
    """Required. The content of the input in string format. We recommend the total content be less than 30,000
    codepoints. The max length of this field is 1024. Use BatchTranslateText for larger text."""

    mime_type: Optional[str] = Field(default=UNSET, alias="mimeType")
    """Optional. The format of the source text, for example, "text/html", "text/plain". If left blank, the MIME type
    defaults to "text/html"."""

    source_language_code: Optional[str] = Field(default=UNSET, alias="sourceLanguageCode")
    """Optional. The ISO-639 language code of the input text if known, for example, "en-US" or "sr-Latn". Supported
    language codes are listed in `Language Support <https://cloud.google.com/translate/docs/languages>`__. If the source
    language isn't specified, the API attempts to identify the source language automatically and returns the source
    language within the response."""

    labels: Optional[dict[str, str]] = UNSET
    """Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63
    characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes.
    International characters are allowed. Label values are optional. Label keys must start with a letter. See
    https://cloud.google.com/translate/docs/advanced/labels for more information."""

    glossary_config: Optional[TranslateTextGlossaryConfig2] = Field(default=UNSET, alias="glossaryConfig")
    """Optional. Glossary to be applied. The glossary must be within the same region (have the same location-id) as the
    model, otherwise an INVALID_ARGUMENT (400) error is returned."""

    transliteration_config: Optional[TransliterationConfig2] = Field(default=UNSET, alias="transliterationConfig")
    """Optional. Transliteration to be applied."""

    model: Optional[str] = UNSET
    """Optional. The ``model`` type requested for this translation. The format depends on model type: - AutoML
    Translation models: ``projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`` - General
    (built-in) models: ``projects/{project-number-or-id}/locations/{location-id}/models/general/nmt``, - Translation LLM
    models: ``projects/{project-number-or-id}/locations/{location-id}/models/general/translation-llm``, For global
    (non-regionalized) requests, use ``location-id`` ``global``. For example,
    ``projects/{project-number-or-id}/locations/global/models/general/nmt``. If not provided, the default Google model
    (NMT) will be used"""

    target_language_code: Optional[str] = Field(default=UNSET, alias="targetLanguageCode")
    """Required. The ISO-639 language code to use for translation of the input text, set to one of the language codes
    listed in `Language Support <https://cloud.google.com/translate/docs/languages>`__."""


class TranslateTextRequestDict(TypedDict):
    contents: NotRequired[list[str]]
    mime_type: NotRequired[str]
    source_language_code: NotRequired[str]
    labels: NotRequired[dict[str, str]]
    glossary_config: NotRequired[TranslateTextGlossaryConfig2Dict]
    transliteration_config: NotRequired[TransliterationConfig2Dict]
    model: NotRequired[str]
    target_language_code: NotRequired[str]
