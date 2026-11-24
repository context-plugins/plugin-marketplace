from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TransliterationConfig(SdkBaseModel):
    """Configures transliteration feature on top of translation."""

    enable_transliteration: Optional[bool] = Field(default=UNSET, alias="enableTransliteration")
    """If true, source text in romanized form can be translated to the target language."""


class TransliterationConfigDict(TypedDict):
    enable_transliteration: NotRequired[bool]
