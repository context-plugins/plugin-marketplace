from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .adaptive_mt_translation import AdaptiveMtTranslation, AdaptiveMtTranslationDict


class AdaptiveMtTranslateResponse(SdkBaseModel):
    """An AdaptiveMtTranslate response."""

    language_code: Optional[str] = Field(default=UNSET, alias="languageCode")
    """Output only. The translation's language code."""

    glossary_translations: Optional[list[AdaptiveMtTranslation]] = Field(default=UNSET, alias="glossaryTranslations")
    """Text translation response if a glossary is provided in the request. This could be the same as 'translation' above
    if no terms apply."""

    translations: Optional[list[AdaptiveMtTranslation]] = UNSET
    """Output only. The translation."""


class AdaptiveMtTranslateResponseDict(TypedDict):
    language_code: NotRequired[str]
    glossary_translations: NotRequired[list[AdaptiveMtTranslationDict]]
    translations: NotRequired[list[AdaptiveMtTranslationDict]]
