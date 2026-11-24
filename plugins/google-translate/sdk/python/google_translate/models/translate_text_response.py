from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .translation import Translation, TranslationDict


class TranslateTextResponse(SdkBaseModel):
    glossary_translations: Optional[list[Translation]] = Field(default=UNSET, alias="glossaryTranslations")
    """Text translation responses if a glossary is provided in the request. This can be the same as ``translations`` if
    no terms apply. This field has the same length as ``contents``."""

    translations: Optional[list[Translation]] = UNSET
    """Text translation responses with no glossary applied. This field has the same length as ``contents``."""


class TranslateTextResponseDict(TypedDict):
    glossary_translations: NotRequired[list[TranslationDict]]
    translations: NotRequired[list[TranslationDict]]
