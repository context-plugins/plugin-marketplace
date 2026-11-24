from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dominant_language import DominantLanguage, DominantLanguageDict


class BatchDetectDominantLanguageItemResult(SdkBaseModel):
    index: Optional[int] = Field(default=UNSET, alias="Index")
    """The zero-based index of the document in the input list."""

    languages: Optional[list[DominantLanguage]] = Field(default=UNSET, alias="Languages")
    """One or more DominantLanguage objects describing the dominant languages in the document."""


class BatchDetectDominantLanguageItemResultDict(TypedDict):
    index: NotRequired[int]
    languages: NotRequired[list[DominantLanguageDict]]
