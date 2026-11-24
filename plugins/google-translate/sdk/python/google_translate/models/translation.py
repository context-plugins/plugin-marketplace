from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .translate_text_glossary_config3 import TranslateTextGlossaryConfig3, TranslateTextGlossaryConfig3Dict


class Translation(SdkBaseModel):
    """A single translation response."""

    translated_text: Optional[str] = Field(default=UNSET, alias="translatedText")
    """Text translated into the target language. If an error occurs during translation, this field might be excluded
    from the response."""

    detected_language_code: Optional[str] = Field(default=UNSET, alias="detectedLanguageCode")
    """The ISO-639 language code of source text in the initial request, detected automatically, if no source language
    was passed within the initial request. If the source language was passed, auto-detection of the language does not
    occur and this field is empty."""

    model: Optional[str] = UNSET
    """Only present when ``model`` is present in the request. ``model`` here is normalized to have project number. For
    example: If the ``model`` requested in TranslationTextRequest is
    ``projects/{project-id}/locations/{location-id}/models/general/nmt`` then ``model`` here would be normalized to
    ``projects/{project-number}/locations/{location-id}/models/general/nmt``."""

    glossary_config: Optional[TranslateTextGlossaryConfig3] = Field(default=UNSET, alias="glossaryConfig")
    """The ``glossary_config`` used for this translation."""


class TranslationDict(TypedDict):
    translated_text: NotRequired[str]
    detected_language_code: NotRequired[str]
    model: NotRequired[str]
    glossary_config: NotRequired[TranslateTextGlossaryConfig3Dict]
