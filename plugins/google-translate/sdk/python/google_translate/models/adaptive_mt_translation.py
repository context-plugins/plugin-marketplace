from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AdaptiveMtTranslation(SdkBaseModel):
    """An AdaptiveMt translation."""

    translated_text: Optional[str] = Field(default=UNSET, alias="translatedText")
    """Output only. The translated text."""


class AdaptiveMtTranslationDict(TypedDict):
    translated_text: NotRequired[str]
