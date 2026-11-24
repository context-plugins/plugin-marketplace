from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SupportedLanguage(SdkBaseModel):
    """A single supported language response corresponds to information related to one supported language."""

    support_source: Optional[bool] = Field(default=UNSET, alias="supportSource")
    """Can be used as a source language."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Human-readable name of the language localized in the display language specified in the request."""

    support_target: Optional[bool] = Field(default=UNSET, alias="supportTarget")
    """Can be used as a target language."""

    language_code: Optional[str] = Field(default=UNSET, alias="languageCode")
    """Supported language code, generally consisting of its ISO 639-1 identifier, for example, 'en', 'ja'. In certain
    cases, ISO-639 codes including language and region identifiers are returned (for example, 'zh-TW' and 'zh-CN')."""


class SupportedLanguageDict(TypedDict):
    support_source: NotRequired[bool]
    display_name: NotRequired[str]
    support_target: NotRequired[bool]
    language_code: NotRequired[str]
