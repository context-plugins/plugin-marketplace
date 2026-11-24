from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .supported_language import SupportedLanguage, SupportedLanguageDict


class SupportedLanguages(SdkBaseModel):
    """The response message for discovering supported languages."""

    languages: Optional[list[SupportedLanguage]] = UNSET
    """A list of supported language responses. This list contains an entry for each language the Translation API
    supports."""


class SupportedLanguagesDict(TypedDict):
    languages: NotRequired[list[SupportedLanguageDict]]
